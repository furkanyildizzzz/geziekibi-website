"use client";
import { HomepageBlogListSuccessResponse } from "@/types/ApiResponseType";
import formatDate from "@/util/formatDate";
import imageFunctions from "@/util/imageFunctions";
import { swiperGroup3 } from "@/util/swiperOption";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

interface HomepageBlogSliderProps {
  blogs: HomepageBlogListSuccessResponse[];
}

const HomepageBlogSlider: React.FC<HomepageBlogSliderProps> = ({ blogs }) => {
  return (
    <>
      <Swiper {...swiperGroup3}>
        {blogs.map((b) => (
          <SwiperSlide key={b.id}>
            <div className="card-news background-card hover-up">
              <div className="card-image">
                {b.tags.length > 0 && (
                  <label className="label">{b.category.name}</label>
                )}

                <Link className="wish" href="#">
                  <svg
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </Link>
                <img
                  src={imageFunctions.resizeImage(
                    b.uploadedPrimaryImages[0]?.url ||
                      "/assets/imgs/page/homepage1/news.png",
                    806,
                    646
                  )}
                  alt={b.title}
                />
              </div>
              <div className="card-info" title={b.title}>
                <div className="card-meta">
                  {" "}
                  <span className="post-date neutral-1000">
                    {formatDate(b.publishDate.toString())}
                  </span>
                  {/* <span className="post-time neutral-1000">6 mins</span>
                  <span className="post-comment neutral-1000">38 comments</span> */}
                </div>
                <div
                  className="card-title"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  <Link
                    className="text-xl-bold neutral-1000"
                    href={"/makaleler/" + b.seoLink}
                  >
                    {b.title}
                  </Link>
                </div>
                <div className="card-program">
                  <div className="endtime">
                    <div className="card-author">
                      {" "}
                      <img src="/assets/imgs/logo-32-32.png" alt="Geziekibi" />
                      <p className="text-sm-bold neutral-1000">Geziekibi</p>
                    </div>
                    <div className="card-button">
                      {" "}
                      <Link
                        className="btn btn-gray"
                        href={"/makaleler/" + b.seoLink}
                      >
                        Okumaya Devam Et
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default HomepageBlogSlider;
