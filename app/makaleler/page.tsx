"use client";

import Layout from "@/components/layout/Layout";
import {
  BlogCategoryListSuccessResponse,
  HomepageBlogListSuccessResponse,
} from "@/types/ApiResponseType";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "../api/homepage/getBlogs";
import imageFunctions from "@/util/imageFunctions";
import formatDate from "@/util/formatDate";
import { getTopTours } from "../api/homepage/getTopTours";
import { getCategories } from "../api/blog/getCategories";
export default function BlogGrid2() {
  const [blogs, setBlogs] = useState<HomepageBlogListSuccessResponse[]>([]);
  const [hereBlog, setHeroBlog] = useState<HomepageBlogListSuccessResponse>();
  const [repeatedTours, setRepeatedTours] = useState<string[]>([]);
  const [categories, setCategories] = useState<
    BlogCategoryListSuccessResponse[]
  >([]);
  const fetchBlogs = async () => {
    const response = await getBlogs();
    if ("data" in response) {
      setBlogs(response.data);
      setHeroBlog(response.data[0]);
    }
  };

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

  const fetchCategories = async () => {
    const response = await getCategories();
    if ("data" in response) {
      setCategories(response.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchTopTours();
    fetchCategories();
  }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main">
          {/* breadcrumbs */}
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
                  <Link href="/makaleler">Makaleler</Link>
                </li>
              </ul>
            </div>
          </section>
          {/* İpuçları bir daha ki gezileriniz için Dünyan'ın Hazineleri Geziekibi ile Keşfedin */}
          <section className="section-box box-next-trips background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8 mb-30">
                  <h1 className="text-86-bold neutral-1000">İpuçları </h1>
                  <h2 className="text-64-medium neutral-1000">
                    bir daha ki gezileriniz için
                  </h2>
                  <h6 className="neutral-500">
                    Dünyan'ın Hazineleri Geziekibi ile Keşfedin{" "}
                  </h6>
                </div>
              </div>
              <div className="box-button-slider-nexttrip full-line" />
            </div>
          </section>
          {blogs.length > 0 && (
            <>
              {/* Hero Blog ve Diğerleri */}
              <section className="section-box box-posts-grid-2 background-body">
                <div className="container">
                  <div className="row">
                    {/* Hero Blog */}
                    {hereBlog && (
                      <div className="col-lg-7">
                        <div className="card-blog">
                          <div className="card-image">
                            <img
                              src={imageFunctions.resizeImage(
                                hereBlog.uploadedPrimaryImages[0].url,
                                704,
                                600
                              )}
                              alt={hereBlog.title}
                            />
                          </div>
                          <div className="card-info">
                            <div className="card-info-blog">
                              <Link
                                className="btn btn-label-tag"
                                href={"/makaleler/" + hereBlog.category.name}
                              >
                                {hereBlog.category.name}
                              </Link>
                              <Link
                                className="card-title heading-5"
                                href={"/makaleler/" + hereBlog.seoLink}
                              >
                                {hereBlog.title}
                              </Link>
                              <div className="card-meta-user">
                                <div className="box-author-small">
                                  {" "}
                                  <img
                                    src="/assets/imgs/logo-32-32.png"
                                    alt="Geziekibi"
                                  />
                                  <p className="text-sm-bold">Geziekibi</p>
                                </div>
                                <div className="date-post">
                                  <p className="text-sm-medium">
                                    {formatDate(
                                      hereBlog.publishDate.toString()
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Diğerleri */}
                    <div className="col-lg-5">
                      <ul className="list-posts list-posts-md">
                        {blogs.slice(1, 4).map((blog) => (
                          <li key={blog.id}>
                            <div className="card-post">
                              <div className="card-image">
                                {" "}
                                <Link href={"/makaleler/" + blog.seoLink}>
                                  <img
                                    src={imageFunctions.resizeImage(
                                      blog.uploadedPrimaryImages[0].url,
                                      131,
                                      131
                                    )}
                                    alt={blog.title}
                                  />
                                </Link>
                              </div>
                              <div className="card-info">
                                {" "}
                                <Link
                                  className="text-xl-bold neutral-1000"
                                  href={"/makaleler/" + blog.seoLink}
                                >
                                  {blog.title}
                                </Link>
                                <div className="d-flex align-items-center">
                                  <p className="text-md-bold neutral-500">
                                    {formatDate(blog.publishDate.toString())}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kategoriler */}
              <section className="section-box box-category-posts background-body">
                <div className="container">
                  <div className="box-list-populars">
                    <div className="row">
                      {categories.length > 0 &&
                        categories.map((category) => (
                          <div key={category.id} className="col-lg-3 col-sm-6">
                            <div className="card-popular card-top-destination background-card wow fadeInUp">
                              <div className="card-image">
                                {" "}
                                <img
                                  src={imageFunctions.resizeImage(
                                    "", //category.uploadedPrimaryImages[0].url,
                                    80,
                                    80
                                  )}
                                  alt={category.name}
                                />
                              </div>
                              <div className="card-info">
                                {" "}
                                <Link className="card-title" href="/blog-grid">
                                  {category.name}
                                </Link>
                                <div className="card-meta">
                                  <div className="meta-links">
                                    {" "}
                                    <Link
                                      className="text-tour text-post"
                                      href="#"
                                    >
                                      {category.blogCount} makale
                                    </Link>
                                  </div>
                                  <div className="card-button">
                                    {" "}
                                    <Link href="/blog-grid">
                                      <svg
                                        width={10}
                                        height={10}
                                        viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Makaleler */}
              <section className="section-box box-news box-news-blog-2 background-9">
                <div className="container">
                  <div className="row align-items-end">
                    <div className="col-md-6 mb-30 wow fadeInLeft">
                      <h2 className="neutral-1000">Makaleler</h2>
                    </div>
                  </div>
                  <div className="box-list-news wow fadeInUp">
                    <div className="row">
                      {blogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6 mb-30">
                          <div className="card-news background-card hover-up">
                            <div className="card-image">
                              <label className="label">
                                {blog.category.name}
                              </label>
                              <Link className="wish" href={blog.category.name}>
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
                                  blog.uploadedPrimaryImages[0].url,
                                  131,
                                  131
                                )}
                                alt={blog.title}
                              />
                            </div>
                            <div className="card-info">
                              <div className="card-meta">
                                {" "}
                                <span className="post-date neutral-1000">
                                  {formatDate(blog.publishDate.toString())}
                                </span>
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
                                  href={"/makaleler/" + blog.seoLink}
                                >
                                  {blog.title}
                                </Link>
                              </div>
                              <div className="card-program">
                                <div className="endtime">
                                  <div className="card-author">
                                    {" "}
                                    <img
                                      src="/assets/imgs/logo-32-32.png"
                                      alt="Travila"
                                    />
                                    <p className="text-sm-bold neutral-1000">
                                      Geziekibi
                                    </p>
                                  </div>
                                  <div className="card-button">
                                    {" "}
                                    <Link
                                      className="btn btn-gray"
                                      href={"/makaleler/" + blog.seoLink}
                                    >
                                      Okumaya Devam Edin
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <div className="pb-90 background-card" />

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
            </>
          )}
        </main>
      </Layout>
    </>
  );
}
