import {
  CategoryListSuccessResponse,
  TourSuccessResponse,
} from "@/types/ApiResponseType";
import TourDetail from "@/components/sections/TourDetail";
import { getTourDetail } from "@/app/api/tour/tourDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCategory } from "@/app/api/tour/getCategory";
import TourCategory from "@/components/sections/TourCategory";

export const metadata: Metadata = {
  title: "Geziekibi",
  description: "Keyfinizin kahyasıyız",
};

export default async function Category({
  params: { seoLink },
}: {
  params: { seoLink: string };
}) {
  const response = await getCategory(seoLink);

  let category = {} as CategoryListSuccessResponse;
  if ("data" in response) {
    category = response.data;
    metadata.title = category.name;
  } else if (response.errorType === "NOT FOUND") {
    notFound();
  }

  return (
    <>
      <head>
        <title>{category.name}</title>
      </head>
      <TourCategory category={category} />;
    </>
  );
}
