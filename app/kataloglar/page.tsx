"use client";
import Layout from "@/components/layout/Layout";
import SwiperGroup3Slider from "@/components/slider/SwiperGroup3Slider";
import { Catalog } from "@/types/ApiResponseType";
import { swiperGroup5, swiperGroupCenter4 } from "@/util/swiperOption";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCatalogs } from "../api/catalog/getCatalogs";
import CatalogPreviewModal from "@/components/sections/Catalog/CatalogPreviewModal";
import imageFunctions from "@/util/imageFunctions";
export default function Catalogs() {
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [openPreviewModal, setOpenPreviewModal] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<Catalog>();

  const fetchCatalogs = async () => {
    const response = await getCatalogs();
    console.log({ response });
    if ("data" in response) {
      setCatalogs(response.data);
    }
  };

  useEffect(() => {
    fetchCatalogs();
  }, []);

  const onClickPreview = (i: Catalog) => {
    setOpenPreviewModal(true);
    setCatalog(i);
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
                  <Link href="/kataloglar">Kataloglar</Link>
                </li>
              </ul>
            </div>
          </section>

          <section
            className="section-box box-next-trips background-body"
            style={{ padding: "10px" }}
          >
            <div className="container">
              <div className="box-button-slider-nexttrip"> </div>
            </div>
          </section>

          <section
            className="section-box box-blog-slide background-body"
            style={{ padding: 0 }}
          >
            <div className="box-slide-blogs">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-center-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {catalogs.map((catalog, index) => {
                      return (
                        <div
                          className="card-blog"
                          key={index}
                          style={{
                            width: "30%",
                            maxWidth: "300px",
                            padding: "10px",
                          }}
                          onClick={() => onClickPreview(catalog)}
                        >
                          <div
                            className="card-image"
                            style={{ maxWidth: "100%" }}
                          >
                            <img
                              src={`${imageFunctions.GetCloudinaryPdfFileFirstPageAsImange(
                                catalog.url
                              )}`}
                              alt={catalog.originalName}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <div className="card-info">
                            <div className="card-info-blog">
                              <h5 className="card-title heading-5">
                                {catalog.originalName}
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
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

        {openPreviewModal && (
          <CatalogPreviewModal
            value={openPreviewModal}
            setOpenModal={setOpenPreviewModal}
            catalog={catalog!}
          />
        )}
      </Layout>
    </>
  );
}
