"use client";
import ByActivities from "@/components/Filter/ByActivities";
import ByDuration from "@/components/Filter/ByDuration";
import ByPagination from "@/components/Filter/ByPagination";
import ByPrice from "@/components/Filter/ByPrice";
import SearchFilterBottom from "@/components/elements/SearchFilterBottom";
import SortToursFilter from "@/components/Filter/SortToursFilter";
import TourCard1 from "@/components/elements/TourCard1";
import Layout from "@/components/layout/Layout";
// import rawToursData from "@/util/tours.json";
import useTourFilter, { Tour } from "@/util/useTourFilter";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CategoryListSuccessResponse,
  FeaturedTourListSuccessResponse,
  TourDailyPath,
} from "@/types/ApiResponseType";
import { getTours } from "../api/tour/getTours";
import imageFunctions from "@/util/imageFunctions";
import { getTopTours } from "../api/homepage/getTopTours";
import { getCategories } from "../api/homepage/getCategories";
import ByName from "@/components/Filter/ByName";
import { getDestinations } from "../api/homepage/getDestinations";
import { SearchParams, searchTours } from "../api/tour/searchTours";
import { useSearchParams } from "next/navigation";

export default function TourGrid() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [repeatedTours, setRepeatedTours] = useState<Tour[]>([]);
  const [topTours, setTopTours] = useState<FeaturedTourListSuccessResponse[]>(
    []
  );
  const [categories, setCategories] = useState<CategoryListSuccessResponse[]>(
    []
  );
  const [destinations, setDestinations] = useState<TourDailyPath[]>([]);
  const [minFilterPrice, setMinFilterPrice] = useState(0);
  const [maxFilterPrice, setMaxFilterPrice] = useState(100000);

  const searchParams = useSearchParams();

  const startDate = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate")!)
    : null;

  const destination = searchParams.get("destination");

  const fetchTours = async () => {
    const response = await getTours();
    if ("data" in response) {
      const toursData = response.data.map((tour) => ({
        ...tour,
        price: tour.pricePerPerson,
        name: tour.title,
        activities: tour.category.name,
        image: tour.uploadedPrimaryImages[0]?.url,
        categoryName: tour.category.name,
        // duration: parseFloat(tour.duration as string),
        // groupSize: parseInt(tour.groupSize as unknown as string),
        // rating: parseFloat(tour.rating as string),
      }));
      setTours(toursData);

      if (toursData.length > 0) {
        const minimumImages = 7;
        const _repeatedTours = Array.from(
          { length: minimumImages },
          (_, i) => toursData[i % toursData.length] // Cycle through existing tours
        );
        setRepeatedTours(_repeatedTours);
      }

      calculateMinAndMaxFilterPrice(toursData);
    }
  };

  const handleClearAllFilters = () => {
    handleSearch({
      destination: null,
      startDate: null,
    });
  };

  const handleSearch = async (params: SearchParams) => {
    handleClearFilters();
    const response = await searchTours(params);
    if ("data" in response) {
      const toursData = response.data.map((tour) => ({
        ...tour,
        price: tour.pricePerPerson,
        name: tour.title,
        activities: tour.category.name,
        image: tour.uploadedPrimaryImages[0]?.url,
        categoryName: tour.category.name,
      }));
      calculateMinAndMaxFilterPrice(toursData);
      setTours(toursData);
    }
  };

  const fetchTopTours = async () => {
    const response = await getTopTours();
    if ("data" in response) {
      setTopTours(response.data);
    }
  };

  const fetchCategories = async () => {
    const response = await getCategories();
    if ("data" in response) {
      setCategories(response.data);
    }
  };

  const calculateMinAndMaxFilterPrice = (
    toursData: FeaturedTourListSuccessResponse[]
  ) => {
    const { minPrice, maxPrice } = toursData.reduce(
      (acc, tour) => {
        acc.minPrice = Math.min(acc.minPrice, tour.pricePerPerson);
        acc.maxPrice = Math.max(acc.maxPrice, tour.pricePerPerson);
        return acc;
      },
      { minPrice: Infinity, maxPrice: -Infinity }
    );

    // Helper function to roll numbers
    const rollPrice = (price: number, direction: string) => {
      if (price === 0) return 0; // If the price is 0, return 0
      const magnitude = Math.pow(10, Math.floor(Math.log10(price))); // Get the magnitude (e.g., 123 -> 100)
      return direction === "down"
        ? Math.floor(price / magnitude) * magnitude // Roll down
        : Math.ceil(price / magnitude) * magnitude; // Roll up
    };

    // Roll the minPrice down and maxPrice up
    const rolledMinPrice = rollPrice(minPrice, "down");
    const rolledMaxPrice = rollPrice(maxPrice, "up");
    setMinFilterPrice(rolledMinPrice);
    setMaxFilterPrice(rolledMaxPrice);
  };

  const fetchDestinations = async () => {
    const response = await getDestinations();
    if ("data" in response) {
      setDestinations(response.data);
    }
  };

  useEffect(() => {
    if (startDate || destination) {
      handleSearch({
        startDate: startDate,
        destination: {
          id: parseInt(destination!),
          name: "",
        } as TourDailyPath,
      });
    } else {
      fetchTours();
    }
    fetchTopTours();
    fetchCategories();
    fetchDestinations();
  }, []);

  const {
    filter,
    sortCriteria,
    itemsPerPage,
    currentPage,
    uniqueActivities,
    // uniqueLanguages,
    // uniqueAttractions,
    // uniqueRatings,
    sortedTours,
    totalPages,
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
  } = useTourFilter(tours!);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section block-banner-tourlist">
            <div className="container">
              <div className="text-center">
                <h3>Geziekibi ile gezin - Hikayenize başlayın!</h3>
                <h6 className="heading-6-medium">
                  Kolayca arama yapabilirsiniz
                </h6>
              </div>
              <div className="box-search-advance box-search-advance-3 background-card wow fadeInUp">
                <SearchFilterBottom
                  miniField={null}
                  destinations={destinations}
                  handleSearch={handleSearch}
                />
              </div>
            </div>
          </section>
          <section className="box-section block-content-tourlist background-body">
            <div className="container">
              <div className="box-content-main">
                <div className="content-right">
                  <div className="box-filters mb-25 pb-5 border-bottom border-1">
                    <SortToursFilter
                      sortCriteria={sortCriteria}
                      handleSortChange={handleSortChange}
                      itemsPerPage={itemsPerPage}
                      handleItemsPerPageChange={handleItemsPerPageChange}
                      handleClearFilters={handleClearFilters}
                      startItemIndex={startItemIndex}
                      endItemIndex={endItemIndex}
                      sortedTours={sortedTours}
                      handleClearAllFilters={handleClearAllFilters}
                    />
                  </div>
                  <div className="box-grid-tours wow fadeIn">
                    <div className="row">
                      {paginatedTours.map((tour) => (
                        <div
                          className="col-xl-4 col-lg-6 col-md-6"
                          key={tour.id}
                        >
                          <div className="card-journey-small background-card">
                            <div className="card-image">
                              <img
                                src={imageFunctions.resizeImage(
                                  tour.image ||
                                    "/assets/imgs/turlar/ege-turu-806-646.webp",
                                  806,
                                  646
                                )}
                                alt={tour.name}
                              />
                            </div>
                            <div className="card-info background-card">
                              <div className="card-rating">
                                <div className="card-left"> </div>
                                <div className="card-right"> </div>
                              </div>
                              <div
                                className="card-title"
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <Link
                                  className="text-lg-bold neutral-1000"
                                  href={"/turlar/" + tour.seoLink}
                                >
                                  {tour.name}{" "}
                                </Link>
                              </div>
                              <div className="card-program">
                                <div className="card-duration-tour">
                                  <p className="icon-duration text-sm-medium neutral-500">
                                    {/* {tour.duration} days, {tour.duration - 1}{" "}
                                    nights */}
                                    {tour.daysAndNights}
                                  </p>
                                </div>
                                <div className="endtime">
                                  <div className="card-price">
                                    <h6 className="heading-6 neutral-1000">
                                      ₺{tour.price}
                                    </h6>
                                  </div>
                                  <div className="card-button">
                                    {" "}
                                    <Link
                                      className="btn btn-gray"
                                      href={"/turlar/" + tour.seoLink}
                                    >
                                      İncele
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ByPagination
                    handlePreviousPage={handlePreviousPage}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handleNextPage={handleNextPage}
                    handlePageChange={handlePageChange}
                  />
                </div>
                <div className="content-left order-lg-first">
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Tur Adı{" "}
                        </h6>
                        <ByName
                          filter={filter}
                          handleTourNameChange={handleTourNameChange}
                        />
                      </div>
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Fiyatı{" "}
                        </h6>
                        <ByPrice
                          filter={filter}
                          handlePriceRangeChange={handlePriceRangeChange}
                          minPrice={minFilterPrice}
                          maxPrice={maxFilterPrice}
                        />
                      </div>
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Kategoriler
                        </h6>
                        <ByActivities
                          uniqueActivities={categories}
                          filter={filter}
                          handleCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <h6 className="text-lg-bold neutral-1000">
                      Popüler Turlar
                    </h6>
                    <div className="box-popular-posts">
                      <ul>
                        {topTours.map((tour) => (
                          <li key={tour.id}>
                            <div className="card-post">
                              <div className="card-image">
                                {" "}
                                <Link href={"/turlar/" + tour.seoLink}>
                                  {" "}
                                  <img
                                    src={imageFunctions.resizeImage(
                                      tour.uploadedPrimaryImages[0]?.url ||
                                        "/assets/imgs/turlar/ege-turu-806-646.webp",
                                      806,
                                      646
                                    )}
                                    alt={tour.title}
                                  />
                                </Link>
                              </div>
                              <div className="card-info">
                                {" "}
                                <Link
                                  className="text-xs-bold"
                                  href={"/turlar/" + tour.seoLink}
                                >
                                  {tour.title}
                                </Link>
                                <span className="price text-sm-bold neutral-1000">
                                  {tour.pricePerPerson}₺
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-media background-body">
            <div className="container-media wow fadeInUp">
              {" "}
              {/* <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /> */}
              {repeatedTours.length &&
                repeatedTours.map((tour, index) => (
                  <img
                    key={index}
                    src={imageFunctions.resizeImage(
                      tour.image || "/assets/imgs/turlar/ege-turu-806-646.webp",
                      806,
                      646
                    )}
                    alt={tour.name}
                  />
                ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
