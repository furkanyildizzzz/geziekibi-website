"use client";
import { getTopTours } from "@/app/api/homepage/getTopTours";
import Layout from "@/components/layout/Layout";
import {
  BlogSuccessResponse,
  HomepageBlogListSuccessResponse,
} from "@/types/ApiResponseType";
import formatDate from "@/util/formatDate";
import imageFunctions from "@/util/imageFunctions";
import { swiperGroupAnimate } from "@/util/swiperOption";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface BlogDetailProps {
  blog: BlogSuccessResponse;
  blogs: HomepageBlogListSuccessResponse[];
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, blogs }) => {
  const [repeatedTours, setRepeatedTours] = useState<string[]>([]);

  const fetchTopTours = async () => {
    const response = await getTopTours();
    if ("data" in response) {
      const minimumImages = 7;
      const _repeatedTours = Array.from(
        { length: minimumImages },
        (_, i) => response.data[i % response.data.length] // Cycle through existing tours
      );
      setRepeatedTours(
        _repeatedTours.map((s) => s.uploadedPrimaryImages[0].url)
      );
    }
  };

  useEffect(() => {
    fetchTopTours();
  }, []);
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
                  <Link href="/makaleler">Blog</Link>
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
                  <span className="text-breadcrumb">{blog.title}</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-content-blog-detail background-body">
            <div className="container-banner-blog-detail">
              {" "}
              <img
                src={
                  blog.uploadedPrimaryImages[0].url ||
                  "/assets/imgs/page/blog/banner-detail.png"
                }
                alt={blog.title}
              />
            </div>
            <div className="container">
              <div className="box-content-detail-blog">
                <div className="box-content-info-detail">
                  <div className="head-blog-detail text-center">
                    {" "}
                    {blog.tags.map((t) => (
                      <Link
                        key={blog.id}
                        className="btn btn-label-tag-lg background-2"
                        href={"tag/" + t.seoLink}
                      ></Link>
                    ))}
                    {/* <Link
                      className="btn btn-label-tag-lg background-7"
                      href="#"
                    >
                      Adventure
                    </Link> */}
                    <h4 className="neutral-1000 mt-25 mb-25">{blog.title}</h4>
                    <div className="meta-post">
                      <div className="meta-user">
                        <div className="box-author-small">
                          <img
                            src="/assets/imgs/logo-32-32.png"
                            alt="Geziekibi"
                          />
                          <p className="text-sm-bold neutral-1000">Geziekibi</p>
                        </div>
                        <div className="post-meta-date">
                          <div className="post-date neutral-1000">
                            {formatDate(blog.publishDate.toString())}
                          </div>
                          {/* <div className="post-time neutral-1000">6 mins</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-detail-post"></div>
                  {/* <div className="box-image-video">
                    {" "}
                    <img
                      src="/assets/imgs/page/blog/img-video.png"
                      alt="Travilla"
                    />
                    <VideoPopup vdocls="btn-play-video popup-youtube" />
                  </div> */}

                  <div
                    className="content-detail-post"
                    dangerouslySetInnerHTML={{ __html: blog.body }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-news box-news-blog-single background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-md-9 mb-30 wow fadeInUp">
                  <h2 className="neutral-1000">İlginizi çekebilir</h2>
                </div>
                <div className="col-md-3 mb-30 wow fadeInUp">
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
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-slider box-swiper-padding">
              <div className="box-list-news">
                <div className="box-swiper mt-30">
                  <div className="swiper-container swiper-group-animate swiper-group-journey">
                    <Swiper {...swiperGroupAnimate}>
                      {blogs.map((b) => (
                        <SwiperSlide key={b.id}>
                          <div className="card-news background-card hover-up">
                            <div className="card-image">
                              <label className="label">{b.category.name}</label>
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
                            <div className="card-info">
                              <div className="card-meta">
                                {" "}
                                <span className="post-date neutral-1000">
                                  {formatDate(b.publishDate.toString())}
                                </span>
                                <span className="post-time neutral-1000">
                                  6 mins
                                </span>
                                <span className="post-comment neutral-1000">
                                  38 comments
                                </span>
                              </div>
                              <div
                                className="card-title"
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                                title={b.title}
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
                                    <img
                                      src="/assets/imgs/logo-32-32.png"
                                      alt="Geziekibi"
                                    />
                                    <p className="text-sm-bold neutral-1000">
                                      Geziekibi
                                    </p>
                                  </div>
                                  <div className="card-button">
                                    {" "}
                                    <Link
                                      className="btn btn-gray"
                                      href={"/makaleler/" + b.seoLink}
                                    >
                                      Okumaya Devam Edin
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      {/* <SwiperSlide>
                        <div className="card-news background-card hover-up">
                          <div className="card-image">
                            <label className="label">Travel</label>
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
                              src="/assets/imgs/page/homepage1/news2.png"
                              alt="Travila"
                            />
                          </div>
                          <div className="card-info">
                            <div className="card-meta">
                              {" "}
                              <span className="post-date neutral-1000">
                                18 Sep 2024
                              </span>
                              <span className="post-time neutral-1000">
                                6 mins
                              </span>
                              <span className="post-comment neutral-1000">
                                38 comments
                              </span>
                            </div>
                            <div className="card-title">
                              {" "}
                              <Link
                                className="text-xl-bold neutral-1000"
                                href="/blog-detail-2"
                              >
                                Top 10 Travel Hacks for Budget-Conscious
                                Adventurers
                              </Link>
                            </div>
                            <div className="card-program">
                              <div className="endtime">
                                <div className="card-author">
                                  {" "}
                                  <img
                                    src="/assets/imgs/page/homepage1/avatar.png"
                                    alt="Travila"
                                  />
                                  <p className="text-sm-bold neutral-1000">
                                    Jimmy Dave
                                  </p>
                                </div>
                                <div className="card-button">
                                  {" "}
                                  <Link
                                    className="btn btn-gray"
                                    href="/blog-detail-2"
                                  >
                                    Keep Reading
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card-news background-card hover-up">
                          <div className="card-image">
                            <label className="label">Discovery</label>
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
                              src="/assets/imgs/page/homepage1/news3.png"
                              alt="Travila"
                            />
                          </div>
                          <div className="card-info">
                            <div className="card-meta">
                              {" "}
                              <span className="post-date neutral-1000">
                                18 Sep 2024
                              </span>
                              <span className="post-time neutral-1000">
                                6 mins
                              </span>
                              <span className="post-comment neutral-1000">
                                38 comments
                              </span>
                            </div>
                            <div className="card-title">
                              {" "}
                              <Link
                                className="text-xl-bold neutral-1000"
                                href="/blog-detail-2"
                              >
                                Discovering Hidden Gems: 10 Off-the-Beaten-Path
                                Travel Tips
                              </Link>
                            </div>
                            <div className="card-program">
                              <div className="endtime">
                                <div className="card-author">
                                  {" "}
                                  <img
                                    src="/assets/imgs/page/homepage1/avatar.png"
                                    alt="Travila"
                                  />
                                  <p className="text-sm-bold neutral-1000">
                                    Jimmy Dave
                                  </p>
                                </div>
                                <div className="card-button">
                                  {" "}
                                  <Link
                                    className="btn btn-gray"
                                    href="/blog-detail-2"
                                  >
                                    Keep Reading
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide> */}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-media background-body">
            <div className="container-media wow fadeInUp">
              {" "}
              {repeatedTours.length > 0 &&
                repeatedTours.map((image, index) => (
                  <img
                    key={index}
                    src={imageFunctions.resizeImage(
                      image || "/assets/imgs/turlar/ege-turu-806-646.webp",
                      806,
                      646
                    )}
                    alt="Geziekibi"
                  />
                ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default BlogDetail;
