import { TourSuccessResponse } from "@/types/ApiResponseType";
import TourDetail from "@/components/sections/TourDetail";
import { getTourDetail } from "@/app/api/tour/tourDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geziekibi",
  description: "Keyfinizin kahyasıyız",
};

type tParams = Promise<{ seoLink: string }>;

// `params`'ı doğru şekilde alıyoruz
export default async function Tur({ params }: { params: tParams }) {
  const { seoLink }: { seoLink: string } = await params;

  const response = await getTourDetail(seoLink);

  let tourData = {} as TourSuccessResponse;
  if ("data" in response) {
    tourData = response.data;
    metadata.title = tourData.title;
  } else if ('errorMessage' in response) {
    console.log({response})
    notFound();
  }

  return (
    <>
      <head>
        <title>{tourData.title}</title>
      </head>
      <TourDetail tour={tourData} />;
    </>
  );
}
