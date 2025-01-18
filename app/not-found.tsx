"use client";
import Layout from "@/components/layout/Layout";
import { swiperGroupAnimate } from "@/util/swiperOption";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Error404() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="section-box box-become-video background-body">
            <div className="container">
              <div className="text-center">
                {" "}
                <img
                  className="mr-10"
                  src="/assets/imgs/page/pages/404.png"
                  alt="Travile"
                />
                <h1 className="neutral-1000">
                  {" "}
                  <span>Aradığınız sayfayı </span> bulamıyoruz
                </h1>
                <p className="text-xl-medium neutral-500">
                  Aradığınız sayfa bulunmuyor ya da kaldırıldı
                </p>
                <div className="d-flex align-items-center justify-content-center mt-45">
                  <Link className="btn btn-black-lg-square" href="/">
                    {/* <svg
                      className="first"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 15L0.999999 8L8 1M1 8L15 8"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg> */}
                    Ana Sayfa
                  </Link>
                  <Link className="btn btn-link" href="/iletisim">
                    Yardım
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
