"use client";

import Link from "next/link";
import BannerMainSlider from "../slider/BannerMainSlider";
import { useRouter } from "next/navigation";

import SearchFilterBottom from "@/components/elements/SearchFilterBottom";
import { SliderResponse, TourDailyPath } from "@/types/ApiResponseType";
import { SearchParams } from "@/app/api/tour/searchTours";

interface BannerHome1Props {
  destinations: TourDailyPath[];
  sliders?: SliderResponse[];
}

const BannerHome1: React.FC<BannerHome1Props> = ({ destinations, sliders }) => {
  const router = useRouter();

  const handleSearch = async (searchParams: SearchParams) => {
    const searchUrl = new URLSearchParams();

    if (searchParams.startDate) {
      searchUrl.set("startDate", searchParams.startDate.toISOString());
    }
    if (searchParams.destination) {
      searchUrl.set("destination", searchParams.destination.id.toString());
    }

    router.push(`/turlar?${searchUrl.toString()}`);
  };

  return (
    <>
      <section className="section-box box-banner-home2 background-body">
        <div className="container-top">
          <div className="container" />
        </div>
        <div className="container-banner">
          <BannerMainSlider sliders={sliders} />
        </div>
        <div className="container">
          <div className="box-search-advance background-card box-search-advance-custom ">
            <SearchFilterBottom
              miniField={undefined}
              destinations={destinations}
              handleSearch={handleSearch}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerHome1;
