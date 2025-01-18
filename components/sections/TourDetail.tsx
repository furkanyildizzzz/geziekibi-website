"use client";
import { getTourDetail } from "@/app/api/tour/tourDetail";
import BookingForm from "@/components/elements/BookingForm";
import Layout from "@/components/layout/Layout";
import SwiperGroup3Slider from "@/components/slider/SwiperGroup3Slider";
import {
  CloudinaryImage,
  HomepageBlogListSuccessResponse,
  TourSuccessResponse,
} from "@/types/ApiResponseType";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { OnemliBilgiler } from "./TourDetail/OnemliBilgiler";
import { Hizmetler } from "./TourDetail/Hizmetler";
import { TurProgrami } from "./TourDetail/TurProgrami";
import { GenelBakis } from "./TourDetail/GenelBakis";
import { SorularVeCevaplar } from "./TourDetail/SorularVeCevaplar";
import { DegerlendirmeVeYorumlar } from "./TourDetail/DegerlendirmeveYorumlar";
import { FiyatlarVeTarihler } from "./TourDetail/FiyatlarVeTarihler";
import Meta from "./TourDetail/Meta";
import Info from "./TourDetail/Info";
import PopularTours from "./PopularTours";
import News2 from "./News2";
import { getBlogs } from "@/app/api/homepage/getBlogs";
import imageFunctions from "@/util/imageFunctions";
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
      </path>
    </svg>
  </button>
);

interface TourDetailProps {
  tour: TourSuccessResponse;
}

const TourDetail: React.FC<TourDetailProps> = ({ tour }) => {
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const [blogs, setBlogs] = useState<HomepageBlogListSuccessResponse[]>([]);

  const fetchBlogs = async () => {
    const response = await getBlogs();
    if ("data" in response) {
      setBlogs(response.data);
    }
  };

  const [repeatedTourImages, setRepeatedTourImages] = useState<
    CloudinaryImage[]
  >([]);
  const RepeatedTourImages = () => {
    const minimumImages = 7;
    const tourImages = [
      ...tour.uploadedGalleryImages,
      ...tour.uploadedPrimaryImages,
    ];
    const _repeatedTourImages = Array.from(
      { length: minimumImages },
      (_, i) => tourImages[i % tourImages.length] // Cycle through existing tours
    );
    setRepeatedTourImages(_repeatedTourImages);
  };
  useEffect(() => {
    setNav1(slider1.current ?? undefined);
    setNav2(slider2.current ?? undefined);
    fetchBlogs();
    RepeatedTourImages();
  }, []);

  const [isAccordion, setIsAccordion] = useState(null);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-body">
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
                  <Link href="/turlar">Turlar</Link>
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
                  <span className="text-breadcrumb">{tour.title}</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-banner-tour-detail background-body">
            <div className="block-banner-tour-detail">
              <div className="row">
                <div className="col-xl-4 col-lg-6">
                  <div className="row">
                    {tour.uploadedGalleryImages[0] && (
                      <div className="col-lg-12 col-sm-6">
                        <div className="banner-detail-1">
                          {" "}
                          <img
                            src={tour.uploadedGalleryImages[0].url}
                            alt={tour.title}
                          />
                        </div>
                      </div>
                    )}
                    {tour.uploadedGalleryImages[1] && (
                      <div className="col-lg-12 col-sm-6">
                        <div className="banner-detail-2">
                          {" "}
                          <img
                            src={tour.uploadedGalleryImages[1].url}
                            alt={tour.title}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="banner-detail-3">
                    {" "}
                    <img
                      src={tour.uploadedPrimaryImages[0].url}
                      alt={tour.title}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="row">
                    {tour.uploadedGalleryImages[2] && (
                      <div className="col-sm-6">
                        <div className="banner-detail-4">
                          {" "}
                          <img
                            src={tour.uploadedGalleryImages[2].url}
                            alt={tour.title}
                          />
                        </div>
                      </div>
                    )}
                    {tour.uploadedGalleryImages[3] && (
                      <div className="col-sm-6">
                        <div className="banner-detail-5">
                          {" "}
                          <img
                            src={tour.uploadedGalleryImages[3].url}
                            alt={tour.title}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {tour.uploadedGalleryImages[4] && (
                    <div className="banner-detail-6">
                      {" "}
                      <img
                        src={tour.uploadedGalleryImages[4].url}
                        alt={tour.title}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="box-section box-content-tour-detail background-body">
            <div className="container">
              <div className="tour-header">
                {/* <div className="tour-rate">
                  <div className="rate-element">
                    <span className="rating">
                      4.96{" "}
                      <span className="text-sm-medium neutral-500">
                        (672 reviews)
                      </span>
                    </span>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-title-main">
                      <h4 className="neutral-1000">{tour.title}</h4>
                    </div>
                  </div>
                </div>
                {/* <Meta /> */}
              </div>
              <div className="row mt-30">
                <div className="col-lg-8">
                  <Info tour={tour} />
                  <div className="box-collapse-expand">
                    <GenelBakis body={tour.body} />
                    <TurProgrami dailyForms={tour.dailyForms} />
                    <Hizmetler services={tour.tourServices} />
                    <FiyatlarVeTarihler dates={tour.dates} />
                    <OnemliBilgiler />
                    {/* <SorularVeCevaplar />
                    <DegerlendirmeVeYorumlar /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* <div className="booking-form">
                    <div className="head-booking-form">
                      <p className="text-xl-bold neutral-1000">
                        Rezervansyon Yap
                      </p>
                    </div>
                    <BookingForm />
                  </div> */}
                  <div className="sidebar-left border-1 background-body">
                    <PopularTours />
                  </div>
                  {/* <div className="sidebar-banner">
                    {" "}
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/tour-detail/banner-ads.png"
                        alt="Travila"
                      />
                    </Link>
                  </div>
                  <div className="sidebar-banner">
                    {" "}
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/tour-detail/banner-ads2.png"
                        alt="Travila"
                      />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-news background-body">
            <News2 blogs={blogs} />
          </section>
          <section className="section-box box-media background-body">
            <div className="container-media wow fadeInUp">
              {" "}
              {/* <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /> */}
              {repeatedTourImages.length &&
                repeatedTourImages.map((image, index) => (
                  <img
                    key={index}
                    src={imageFunctions.resizeImage(
                      image.url || "/assets/imgs/turlar/ege-turu-806-646.webp",
                      806,
                      646
                    )}
                    alt={image.originalName}
                  />
                ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};
export default TourDetail;
