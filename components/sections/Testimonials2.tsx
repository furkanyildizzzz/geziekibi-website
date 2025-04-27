"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOption";
import { GoogleResponse } from "@/types/ApiResponseType";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Testimonials2({
  googleResponse,
}: {
  googleResponse: GoogleResponse;
}) {
  const router = useRouter();
  const openInNewTab = () => {
    const url = googleResponse.url; // veya sabit bir URL
    window.open(url, "_blank"); // Yeni sekmede aç
  };
  return (
    <>
      <section className="section-box box-testimonials-2 background-body">
        <div className="container">
          <div
            className="box-author-testimonials"
            style={{ cursor: "pointer" }}
            onClick={() => {
              // router.push(
              //   googleResponse.url
              //   // "https://www.google.com/search?sa=X&sca_esv=aac09e88d3bc5d88&rlz=1C5GCEM_enTR1109TR1110&tbm=lcl&q=Geziekibi+Turizm+Seyahat+Acentas%C4%B1+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDOztDQ1MbWwNDWyNDEyNzaxNNnAyPiKUds9tSozNTszKVMhpLQosypXITi1MjEjsUTBMTk1rySx-MhGhcj8otLcnMSiRaykqAYAN5EkB3cAAAA&rldimm=16699545895294273494&hl=tr-TR&ved=2ahUKEwiNrYqanLSLAxUwRPEDHXUBHFAQ9fQKegQIPxAF&cshid=1739022683170825&biw=1512&bih=749&dpr=2#lkt=LocalPoiReviews"
              // );

              openInNewTab();
            }}
          >
            {" "}
            <img
              src="/assets/imgs/page/homepage1/testimonial.png"
              alt="Travila"
            />
            <img
              src="/assets/imgs/page/homepage1/testimonial2.png"
              alt="Travila"
            />
            <img
              src="/assets/imgs/page/homepage1/testimonial3.png"
              alt="Travila"
            />
            <div className="card-rate" style={{ marginLeft: "15px" }}>
              {/* <span style={{ marginLeft: "15px" }}>Google Yorumlar</span> */}
              {Array.from({ length: googleResponse.rating }, (_, index) => (
                <img
                  key={index}
                  src="/assets/imgs/template/icons/star.svg"
                  alt="Travila"
                />
              ))}
              <span style={{ marginLeft: "15px" }}>
                {googleResponse.rating}{" "}
              </span>
            </div>
          </div>
          <h2 className="mt-8 mb-25 neutral-1000">Google Yorumlarınız ...</h2>
          <h6 className="mt-8 mb-25 neutral-1000">
            Bizi Değerlendirin <Link href={googleResponse.url}>{"->"}</Link>{" "}
          </h6>
        </div>
        <div className="block-testimonials">
          <div className="container-testimonials">
            <div className="container-slider">
              <div className="box-swiper mt-30">
                <div className="swiper-container swiper-group-animate swiper-group-journey">
                  <Swiper {...swiperGroupAnimate}>
                    {googleResponse.reviews.map((review, i) => (
                      <SwiperSlide key={i}>
                        <div className="card-testimonial background-card">
                          <div className="card-info">
                            <p className="neutral-500" style={{}}>
                              {review.text}
                            </p>
                          </div>
                          <div className="card-top">
                            <div className="card-author">
                              <div className="card-image">
                                {" "}
                                <img
                                  src={review.profile_photo_url}
                                  alt="Travila"
                                />
                              </div>
                              <div className="card-info">
                                <p className="text-lg-bold neutral-1000">
                                  {review.author_name}
                                </p>
                                <p className="text-sm neutral-1000">
                                  {review.relative_time_description
                                    .replace("minute ago", "dakika önce")
                                    .replace("minutes ago", "dakika önce")
                                    .replace("day ago", "gün önce")
                                    .replace("days ago", "gün önce")
                                    .replace("in the last week", "geçen hafta")
                                    .replace("weeks ago", "hafta önce")
                                    .replace("month ago", "ay önce")
                                    .replace("months ago", "ay önce")
                                    .replace("year ago", "yıl önce")
                                    .replace("years ago", "yıl önce")}
                                </p>
                              </div>
                            </div>
                            <div className="card-rate">
                              {" "}
                              {Array.from(
                                { length: review.rating },
                                (_, index) => (
                                  <img
                                    key={index}
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="Travila"
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box-button-slider box-button-slider-team text-end">
            <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
