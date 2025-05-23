"use client";
import { CurrencyEnum } from "@/lib/enums";
import { ChangeEvent, useState } from "react";

export interface Tour {
  id: number;
  price: number;
  currency: CurrencyEnum;
  //   duration: number;
  //   groupSize: number;
  tourType: string;
  //   language: string;
  //   rating: number;
  name: string;
  activities: string;
  //   attraction: string;
  image: string;
  daysAndNights: string;
  seoLink: string;
  categoryName: string;
}

interface Filter {
  names: string[];
  tourName: string;
  activities: string[];
  languages: string[];
  attractions: string[];
  priceRange: [number, number];
  durationRange: [number, number];
  ratings: number[];
  groupSize: number[];
}

type SortCriteria = "name" | "price" | "rating";

const useTourFilter = (toursData: Tour[]) => {
  const [filter, setFilter] = useState<Filter>({
    names: [],
    tourName: "",
    activities: [],
    languages: [],
    attractions: [],
    priceRange: [
      0,
      toursData.reduce(
        (max, tour) => (tour.price > max ? tour.price : max),
        0
      ) || 200000,
    ],
    durationRange: [0, 30],
    ratings: [],
    groupSize: [],
  });
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>("name");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Get unique values for name, activities, language, attraction, rating, duration, and group size
  const uniqueNames = [...new Set(toursData.map((tour) => tour.name))];
  const uniqueActivities = [
    ...new Set(toursData.map((tour) => tour.activities)),
  ];
  //   const uniqueLanguages = [...new Set(toursData.map((tour) => tour.language))];
  //   const uniqueAttractions = [
  //     ...new Set(toursData.map((tour) => tour.attraction)),
  //   ];
  //   const uniqueRatings = [...new Set(toursData.map((tour) => tour.rating))];
  //   const uniqueDurations = [...new Set(toursData.map((tour) => tour.duration))];
  //   const uniqueGroupSizes = [
  //     ...new Set(toursData.map((tour) => tour.groupSize)),
  //   ];

  // Filter the tours by selected names, activities, languages, attractions, price range, duration, and rating
  console.log({ toursData });
  console.log({ priceRange: filter.priceRange });
  const filteredTours = toursData.filter((tour) => {
    return (
      (filter.names.length === 0 || filter.names.includes(tour.name)) &&
      (filter.tourName.length === 0 ||
        tour.name.toLowerCase().includes(filter.tourName.toLowerCase())) &&
      (filter.activities.length === 0 ||
        filter.activities.includes(tour.activities)) &&
      filter.languages.length === 0 &&
      // ||
      // filter.languages.includes(tour.language)
      //filter.attractions.length === 0 ||
      // filter.attractions.includes(tour.attraction)) &&
      tour.price >= filter.priceRange[0] &&
      tour.price <= filter.priceRange[1]
      //   &&
      //   tour.duration >= filter.durationRange[0] &&
      //   tour.duration <= filter.durationRange[1] &&
      //   (filter.ratings.length === 0 || filter.ratings.includes(tour.rating)) &&
      //   (filter.groupSize.length === 0 ||
      //     filter.groupSize.includes(tour.groupSize))
    );
  });
  console.log({ filteredTours });

  // Sort the filtered tours based on the selected criteria
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortCriteria === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === "price") {
      return a.price - b.price;
    } else if (sortCriteria === "rating") {
      //   return b.rating - a.rating;
    }
    return 0;
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedTours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTours = sortedTours.slice(startIndex, endIndex);

  const handleCheckboxChange =
    (field: keyof Filter, value: string[]) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setFilter((prevFilter) => {
        const values = prevFilter[field] as string[];
        if (checked) {
          return { ...prevFilter, [field]: [...values, ...value] };
        } else {
          return {
            ...prevFilter,
            [field]: values.filter((item) => !value.includes(item as string)),
          };
        }
      });
    };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value as SortCriteria);
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    console.log({ values });
    setFilter((prevFilter) => ({
      ...prevFilter,
      priceRange: values,
    }));
  };

  const handleTourNameChange = (value: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      tourName: value,
    }));
  };

  const handleDurationRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFilter((prevFilter) => {
      const durationRange = [...prevFilter.durationRange] as [number, number];
      durationRange[name === "minDuration" ? 0 : 1] = parseFloat(value);
      return {
        ...prevFilter,
        durationRange,
      };
    });
  };

  const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClearFilters = () => {
    console.log("handleClearFilters");
    console.log({ toursData });
    setFilter({
      names: [],
      activities: [],
      languages: [],
      attractions: [],
      priceRange: [
        0,
        toursData.reduce(
          (max, tour) => (tour.price > max ? tour.price : max),
          0
        ) || 200000,
      ],
      durationRange: [0, 30],
      ratings: [],
      groupSize: [],
      tourName: "",
    });
    setSortCriteria("name");
    setItemsPerPage(4);
    setCurrentPage(1);
  };

  const startItemIndex = (currentPage - 1) * itemsPerPage + 1;
  const endItemIndex = Math.min(
    startItemIndex + itemsPerPage - 1,
    sortedTours.length
  );

  return {
    filter,
    setFilter,
    sortCriteria,
    setSortCriteria,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    uniqueNames,
    uniqueActivities,
    // uniqueLanguages,
    // uniqueAttractions,
    // uniqueRatings,
    // uniqueDurations,
    // uniqueGroupSizes,
    filteredTours,
    sortedTours,
    totalPages,
    startIndex,
    endIndex,
    paginatedTours,
    handleCheckboxChange,
    handleSortChange,
    handlePriceRangeChange,
    handleTourNameChange,
    handleDurationRangeChange,
    handleItemsPerPageChange,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    handleClearFilters,
    startItemIndex,
    endItemIndex,
  };
};

export default useTourFilter;
