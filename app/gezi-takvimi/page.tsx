"use client";
import Layout from "@/components/layout/Layout";
import { FAQSuccessResponse, TourDTO, TravelCalendarResponse } from "@/types/ApiResponseType";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFAQs } from "../api/homepage/getFAQs";
import { getTravelCalendar } from "../api/homepage/getTravelCalendar";
import formatDate from "@/util/formatDate";
import { CurrencyDisplayNames } from "@/lib/enums";
export default function TravelCalendar() {
  const [travelCalendar, setTravelCalendar] = useState<TravelCalendarResponse>();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const fetchTravelCalendar = async () => {
    const response = await getTravelCalendar();
    if ("data" in response) {
      setTravelCalendar(response.data);
    }
  };

  useEffect(() => {
    fetchTravelCalendar();
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
                  <span className="text-breadcrumb">Gezi Takvimi</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-faqs box-faqs-type-2 box-faqs-type-3 background-body">
            <div className="box-faqs-inner">
              <div className="container">
                <div className="block-faqs">
                  <div className="accordion" id="accordionFAQ">
                    {/* {FAQs.length > 0 &&
                      FAQs.sort((a, b) => a.Order - b.Order).map((faq) => (
                        <div
                          key={faq.id}
                          className="accordion-item wow fadeInUp"
                        >
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
                      ))} */}

                    {travelCalendar?.years.map((year) =>
                      year.months.map((month) => {
                        const key = `${year.year}-${month.month}`;
                        const isOpen = openKey === key;
                        return (
                          <div
                            key={key}
                            style={{
                              marginBottom: 20,
                              border: "1px solid #ccc",
                              borderRadius: 6,
                              overflow: "hidden",
                            }}
                          >
                            <button
                              onClick={() => toggle(key)}
                              style={{
                                width: "100%",
                                background: "#eee",
                                border: "none",
                                padding: "12px 20px",
                                textAlign: "left",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: 18,
                              }}
                              aria-expanded={isOpen}
                              aria-controls={`panel-${key}`}
                              id={`header-${key}`}
                            >
                              {new Date(year.year, month.month - 1).toLocaleString("tr-TR", {
                                month: "long",
                                year: "numeric",
                              })}{" "}
                              Turları
                              <span style={{ float: "right", fontWeight: "normal" }}>
                                {isOpen ? "▲" : "▼"}
                              </span>
                            </button>

                            {isOpen && (
                              <div
                                id={`panel-${key}`}
                                role="region"
                                aria-labelledby={`header-${key}`}
                                style={{
                                  background: "#fff",
                                  padding: 20,
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontWeight: "bold",
                                    borderBottom: "1px solid #ccc",
                                    paddingBottom: 6,
                                    marginBottom: 10,
                                  }}
                                >
                                  <span style={{ width: 300, float: "left" }}>Gidiş / Dönüş</span>
                                  <span style={{ width: 150, float: "left" }}>Tur Süresi</span>
                                  <span style={{ flexGrow: 1 }}>Tur Adı</span>
                                  <span
                                    style={{
                                      width: 100,
                                      float: "right",
                                      textAlign: "right",
                                      paddingRight: 10,
                                    }}
                                  >
                                    Fiyat
                                  </span>
                                </div>

                                <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
                                  {month.tours.map((tour: TourDTO, i: number) => {
                                    const departure = formatDate(tour.departureDate);
                                    const returnD = formatDate(tour.returnDate);
                                    const [days, nights] = (() => {
                                      const diffTime =
                                        new Date(tour.returnDate!).getTime() -
                                        new Date(tour.departureDate!).getTime();
                                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                      return [diffDays, diffDays - 1];
                                    })();

                                    // const priceString =
                                    //   tour.price.amount.toLocaleString("tr-TR", {
                                    //     minimumFractionDigits: 2,
                                    //     maximumFractionDigits: 2,
                                    //   }) +
                                    //   " " +
                                    //   tour.price.currency;
                                    const priceString = tour.price && tour.price.amount !== 0
                                      ? `${CurrencyDisplayNames[tour.price.currency]
                                      } ${tour.price.amount}`
                                      : "-"

                                    return (
                                      <li
                                        key={i}
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          padding: "8px 0",
                                          borderBottom: i !== month.tours.length - 1 ? "1px solid #eee" : "",
                                        }}
                                      >
                                        <Link
                                          href={`/turlar/${tour.seoLink}`}
                                          style={{
                                            display: "flex",
                                            width: "100%",
                                            textDecoration: "none",
                                            color: "inherit",
                                          }}
                                        >
                                          <span style={{ width: 300, float: "left" }}>
                                            {departure} - {returnD}
                                          </span>
                                          <span style={{ width: 150, float: "left" }}>
                                            {nights} Gece - {days} Gün
                                          </span>
                                          <span
                                            style={{
                                              maxWidth: 450,
                                              display: "inline flow-root list-item",
                                              flexGrow: 1,
                                            }}
                                          >
                                            {tour.tourName.toUpperCase()}
                                          </span>
                                          <span
                                            style={{
                                              width: 100,
                                              float: "right",
                                              textAlign: "right",
                                              paddingRight: 10,
                                            }}
                                          >
                                            {priceString}
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}

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
