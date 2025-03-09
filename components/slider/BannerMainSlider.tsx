"use client";
import { SliderResponse } from "@/types/ApiResponseType";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const staticSlides = [
  "/assets/imgs/banner-main-slider/geziekibi-slider-1-1920-769.jpg",
  "/assets/imgs/banner-main-slider/geziekibi-slider-2-1920-769.jpg",
  "/assets/imgs/banner-main-slider/geziekibi-slider-3-1920-769.jpg",
  "/assets/imgs/banner-main-slider/geziekibi-slider-1-1920-769.jpg",
];

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

export default function BannerMainSlider({
  sliders,
}: {
  sliders?: SliderResponse[];
}) {
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  useEffect(() => {
    setNav1(slider1.current ?? undefined);
    setNav2(slider2.current ?? undefined);
  }, []);

  const settingsMain = {
    asNavFor: nav2,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const settingsThumbs = {
    slidesToShow: sliders && sliders.length > 0 ? sliders.length : staticSlides.length,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    vertical: true,
    asNavFor: nav1,
  };

  return (
    <>
      <Slider {...settingsMain} ref={slider1} className="banner-main">
        {sliders && sliders.length > 0 ? (
          sliders
            .map((slider, i) => {
              return (
                <div key={i} className="banner-slide">
                  <div
                    key={slider.id}
                    className="banner-image"
                    style={{
                      background: `url('${slider.image.url}') no-repeat top center`,
                      backgroundPosition: "top center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      minHeight: "769px",
                      paddingBottom: "250px",
                    }}
                  ></div>
                </div>
              );
            })
            .concat(
              <div key={sliders.length} className="banner-slide">
                <div
                  className="banner-image"
                  style={{
                    background: `url('${sliders[0].image.url}') no-repeat top center`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minHeight: "769px",
                    paddingBottom: "250px",
                  }}
                ></div>
              </div>
            )
        ) : (
          staticSlides.map((src, index) => (
            <div key={index} className="banner-slide">
              <div
                key={index + 4}
                className="banner-image"
                style={{
                  background: `url('${src}') no-repeat top center`,
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  minHeight: "769px",
                  paddingBottom: "250px",
                }}
              />
            </div>
          ))
        )}
      </Slider>
      <div className="slider-thumnail">
        <Slider
          {...settingsThumbs}
          ref={slider2}
          className="slider-nav-thumbnails"
        >
          {sliders?.length ? (
            sliders.map((slider, i) => (
              <div key={i} className="banner-slide">
                <img src={slider.image.url} alt="Geziekibi" />
              </div>
            ))
          ) : (
            staticSlides.map((src, index) => (
              <div className="banner-slide" key={index}>
                <img src={src} alt="Geziekibi" />
              </div>
            ))
          )}

        </Slider>
      </div>
    </>
  );
}
