import { CategoryListSuccessResponse, FeaturedTourListSuccessResponse } from "@/types/ApiResponseType";
import TourCategory from "@/components/sections/TourCategory";
import { getCategory } from "@/app/api/tour/getCategory";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Head from "next/head";
import TourList from "@/components/sections/TourList";
import { getToursByCategoryId } from "@/app/api/tour/getToursByCategory";

type tParams = Promise<{ seoLink: string }>;

// `params`'ı doğru şekilde alıyoruz
export default async function Category({ params }: { params: tParams }) {
  const { seoLink }: { seoLink: string } = await params;

  // `seoLink`'i kullanarak veri çekiyoruz
  const response = await getCategory(seoLink);

  let category = {} as CategoryListSuccessResponse;
  if ("data" in response) {
    category = response.data;
  } else if (response.errorType === "NOT FOUND") {
    notFound();
  }

  const toursResponse = await getToursByCategoryId(category.id);

  let tourList: FeaturedTourListSuccessResponse[] = [];
  if ("data" in toursResponse) {
    tourList = toursResponse.data;
  }

  console.log({ tourList })

  return (
    <>
      <Head>
        <title>{category.name}</title>
        <meta
          name="description"
          content={category.description || "Geziekibi"}
        />
      </Head>
      <TourList tourList={tourList} category={category} />
    </>
  );
}
