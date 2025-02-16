"use client";
import Dropdown from "react-bootstrap/Dropdown";
import { swiperGroup1 } from "@/util/swiperOption";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import MyDatePicker from "../elements/MyDatePicker";

export default function BannerHome2() {
  return (
    <>
      <section className="section-box box-banner-home3 background-body">
        <div className="container">
          <div className="box-search-advance box-search-advance-2 background-card wow fadeInUp">
            <div className="box-top-search">
              <div className="left-top-search">
                <Link className="category-link btn-click active" href="#">
                  Turlar
                </Link>
                <Link className="category-link btn-click" href="#">
                  Biletler
                </Link>
              </div>
            </div>
            <div className="box-bottom-search background-100">
              <div className="item-search">
                <label className="text-sm-bold neutral-500">Location</label>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle
                    className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    New York, USA
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Paris, France
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Tokyo, Japan
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        New York City, USA
                      </Link>
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="item-search item-search-2">
                <label className="text-sm-bold neutral-500">Check In</label>
                <div className="box-calendar-date">
                  {/* <MyDatePicker /> */}
                </div>
              </div>
            </div>
            <div className="bottom-search-button">
              <div className="box-search-button">
                <button className="btn btn-black-lg">
                  <svg
                    className="first"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Search
                </button>
              </div>
              <Link
                className="text-sm-medium need-some-help"
                href="/help-center"
              >
                Need some help?
              </Link>
            </div>
          </div>
          <div className="box-swiper mt-30">
            <div className="swiper-container swiper-group-1">
              <Swiper {...swiperGroup1}>
                <SwiperSlide>
                  <div className="item-banner-box item-banner-box-slide-1"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item-banner-box item-banner-box-slide-2"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item-banner-box item-banner-box-slide-3"></div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination swiper-pagination-group-1 swiper-pagination-style-1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
