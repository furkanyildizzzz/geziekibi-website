import Link from "next/link";
import BannerMainSlider from "../slider/BannerMainSlider";

import SearchFilterBottom from "@/components/elements/SearchFilterBottom";

export default function BannerHome1() {
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
            <SearchFilterBottom />
          </div>
        </div>
      </section>
    </>
  );
}
