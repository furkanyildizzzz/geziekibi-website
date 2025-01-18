"use client";
import { ChangeEvent, useState } from "react";

export interface Blog {
  id: number;
  name: string;
  image: string;
  seoLink: string;
  categoryName: string;
}

interface Filter {
  names: string[];
  blogName: string;
}

type SortCriteria = "name" | "price" | "rating";

const useBlogFilter = (blogsData: Blog[]) => {
  const [filter, setFilter] = useState<Filter>({
    names: [],
    blogName: "",
  });
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>("name");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Get unique values for name, activities, language, attraction, rating, duration, and group size
  const uniqueNames = [...new Set(blogsData.map((blog) => blog.name))];

  // Filter the Blogs by selected names, activities, languages, attractions, price range, duration, and rating
  const filteredBlogss = blogsData.filter((blog) => {
    return (
      (filter.names.length === 0 || filter.names.includes(blog.name)) &&
      (filter.blogName.length === 0 ||
        blog.name.toLowerCase().includes(filter.blogName.toLowerCase()))
    );
  });

  // Sort the filtered Blogs based on the selected criteria
  const sortedBlogs = [...filteredBlogss].sort((a, b) => {
    if (sortCriteria === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBlogs = sortedBlogs.slice(startIndex, endIndex);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value as SortCriteria);
  };

  const handleBlogNameChange = (value: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      blogName: value,
    }));
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
    setFilter({
      names: [],
      blogName: "",
    });
    setSortCriteria("name");
    setItemsPerPage(4);
    setCurrentPage(1);
  };

  const startItemIndex = (currentPage - 1) * itemsPerPage + 1;
  const endItemIndex = Math.min(
    startItemIndex + itemsPerPage - 1,
    sortedBlogs.length
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
    filteredBlogss,
    sortedBlogs,
    totalPages,
    startIndex,
    endIndex,
    paginatedBlogs,
    handleSortChange,
    handleBlogNameChange,
    handleItemsPerPageChange,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    handleClearFilters,
    startItemIndex,
    endItemIndex,
  };
};

export default useBlogFilter;
