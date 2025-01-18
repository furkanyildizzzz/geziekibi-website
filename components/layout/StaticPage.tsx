"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import SwiperGroup3Slider from "@/components/slider/SwiperGroup3Slider";
import { PageTypeEnum, PageTypeEnumDisplayNames } from "@/lib/enums";
import { StaticPageSuccessResponse } from "@/types/ApiResponseType";
import { swiperGroupAnimate } from "@/util/swiperOption";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
export default function StaticPage({
  pageData,
}: {
  pageData: StaticPageSuccessResponse;
}) {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-100">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  {" "}
                  <Link href="/">Anasayfa</Link>
                  <span className="arrow-right">
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="text-breadcrumb">
                    {PageTypeEnumDisplayNames[pageData.pageType]}
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-become-video background-body">
            <div className="container">
              <div className="box-mw-824">
                <div className="text-center">
                  <h2 className="mt-15 mb-15 neutral-1000 wow fadeInUp">
                    {pageData.title}
                  </h2>
                </div>
              </div>
              <div className="box-mw-824">
                <div
                  className="box-detail-info"
                  dangerouslySetInnerHTML={{ __html: pageData.body }}
                ></div>
              </div>
            </div>
          </section>
          <section className="section-box box-media background-body">
            <div className="container-media wow fadeInUp">
              {" "}
              <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
