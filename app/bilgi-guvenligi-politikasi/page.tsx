import {
  CategoryListSuccessResponse,
  StaticPageSuccessResponse,
  TourSuccessResponse,
} from "@/types/ApiResponseType";
import TourDetail from "@/components/sections/TourDetail";
import { getTourDetail } from "@/app/api/tour/tourDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCategory } from "@/app/api/tour/getCategory";
import TourCategory from "@/components/sections/TourCategory";
import { PageTypeEnum, PageTypeEnumDisplayNames } from "@/lib/enums";
import { getStaticPage } from "../api/homepage/getStaticPage";
import StaticPage from "@/components/layout/StaticPage";

export const metadata: Metadata = {
  title: "Hakkımızda | Geziekibi",
  description: "Keyfinizin kahyasıyız",
};

export default async function SabitSayfa() {
  const response = await getStaticPage(
    PageTypeEnum.PageInformationSecurityPolicy
  );

  let pageData = {
    pageType: PageTypeEnum.PageInformationSecurityPolicy,
  } as StaticPageSuccessResponse;
  if ("data" in response) {
    pageData = response.data;
    metadata.title =
      PageTypeEnumDisplayNames[PageTypeEnum.PageInformationSecurityPolicy];
  } else if (response.errorType === "NOT FOUND") {
    notFound();
  }

  return (
    <>
      <head>
        <title>
          {PageTypeEnumDisplayNames[PageTypeEnum.PageInformationSecurityPolicy]}
        </title>
      </head>
      <StaticPage pageData={pageData} />;
    </>
  );
}
