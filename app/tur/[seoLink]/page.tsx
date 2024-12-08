import { TourSuccessResponse } from "@/types/ApiResponseType";
import TourDetail from "@/components/sections/TourDetail";
import { getTourDetail } from "@/app/api/tour/tourDetail";
import { notFound } from "next/navigation";

export default async function Tur({
  params: { seoLink },
}: {
  params: { seoLink: string };
}) {
  const response = await getTourDetail(seoLink);

  let tourData = {} as TourSuccessResponse;
  if ("data" in response) {
    tourData = response.data;
  } else if (response.errorType === "NOT FOUND") {
    notFound();
  }

  return <TourDetail tour={tourData} />;
}
