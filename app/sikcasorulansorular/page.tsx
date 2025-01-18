"use client";
import Layout from "@/components/layout/Layout";
import { FAQSuccessResponse } from "@/types/ApiResponseType";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFAQs } from "../api/homepage/getFAQs";
export default function FAQ() {
  const [isAccordion, setIsAccordion] = useState(0);
  const [FAQs, setFAQs] = useState<FAQSuccessResponse[]>([]);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const fetchFAQs = async () => {
    const response = await getFAQs();
    if ("data" in response) {
      setFAQs(response.data);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

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
                  <span className="text-breadcrumb">Sıkça Sorulan Sorular</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-faqs box-faqs-type-2 box-faqs-type-3 background-body">
            <div className="box-faqs-inner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-30">
                    <h3 className="neutral-1000 mb-20">
                      Sıkça Sorulan Sorular
                    </h3>
                    <p className="text-lg-medium neutral-500">
                      Aklınıza gelebilecek soruların cevabını buradan
                      bulabilirsiniz.
                    </p>
                    <div className="d-flex align-items-center mt-45">
                      <Link
                        className="btn btn-black-lg-square"
                        href="/iletisim"
                      >
                        İletişim
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15L15 8L8 1M15 8L1 8"
                            stroke=""
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-30">
                    <div className="box-banner-faq">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="banner-faq">
                            {" "}
                            <img
                              src="/assets/imgs/page/pages/banner-faq.png"
                              alt="Travilla"
                            />
                          </div>
                          <div className="banner-faq">
                            {" "}
                            <img
                              src="/assets/imgs/page/pages/banner-faq2.png"
                              alt="Travilla"
                            />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="banner-faq">
                            {" "}
                            <img
                              src="/assets/imgs/page/pages/banner-faq3.png"
                              alt="Travilla"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="block-faqs">
                  <div className="accordion" id="accordionFAQ">
                    {FAQs.length > 0 &&
                      FAQs.sort((faq) => faq.Order).map((faq) => (
                        <div className="accordion-item wow fadeInUp">
                          <h5
                            className="accordion-header"
                            id={"heading" + faq.id}
                          >
                            <button
                              className={
                                isAccordion == faq.id
                                  ? "accordion-button text-heading-5"
                                  : "accordion-button text-heading-5 collapsed"
                              }
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + faq.id}
                              aria-expanded="true"
                              aria-controls={"collapse" + faq.id}
                              onClick={() => handleAccordion(faq.id)}
                            >
                              <h3>{faq.Order}</h3>
                              <p>{faq.Question}</p>
                            </button>
                          </h5>
                          <div
                            className={
                              isAccordion == faq.id
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                            id={"collapse" + faq.id}
                            aria-labelledby={"heading" + faq.id}
                            data-bs-parent="#accordionFAQ"
                          >
                            <div className="accordion-body">{faq.Answer}</div>
                          </div>
                        </div>
                      ))}
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
      </Layout>
    </>
  );
}
