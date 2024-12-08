import Link from "next/link";
import BannerMainSlider from "../slider/BannerMainSlider";

import SearchFilterBottom from "@/components/elements/SearchFilterBottom";
import { TourDailyPath } from "@/types/ApiResponseType";

interface BannerHome1Props {
  destinations: TourDailyPath[];
}

const BannerHome1: React.FC<BannerHome1Props> = ({ destinations }) => {
  return (
    <>
      <section className="section-box box-banner-home2 background-body">
        <div className="container-top">
          <div className="container" />
        </div>
        <div className="container-banner">
          <BannerMainSlider />
        </div>
        <div className="container">
          <div className="box-search-advance background-card box-search-advance-custom ">
            <SearchFilterBottom
              miniField={undefined}
              destinations={destinations}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerHome1;
