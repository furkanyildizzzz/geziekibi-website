import Link from "next/link";
import CategoryFilter from "../elements/CategoryFilter";
import { FeaturedTourListSuccessResponse } from "@/types/ApiResponseType";
import imageFunctions from "@/util/imageFunctions";

interface OurFeatured1Props {
  tours: FeaturedTourListSuccessResponse[];
}

const OurFeatured1: React.FC<OurFeatured1Props> = ({ tours }) => {
  return (
    <>
      <section className="section-box box-our-featured background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-30 text-center text-lg-start">
              <h2 className="neutral-1000">Yakındaki Turlar</h2>
            </div>
          </div>
          <div className="box-list-featured">
            <div className="row">
              {tours.map((t) => (
                <div className="col-lg-4 col-md-6">
                  <div className="card-journey-small background-card">
                    <div className="card-image">
                      <img
                        // src={
                        //   t.uploadedPrimaryImages[0].url ||
                        //   "/assets/imgs/turlar/ege-turu-806-646.webp"
                        // }
                        src={imageFunctions.resizeImage(
                          t.uploadedPrimaryImages[0]?.url ||
                            "/assets/imgs/turlar/ege-turu-806-646.webp",
                          806,
                          646
                        )}
                        alt={t.title}
                      />
                    </div>
                    <div className="card-info background-card">
                      <div className="card-rating">
                        <div className="card-left"> </div>
                        <div className="card-right"></div>
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
                          className="heading-6 neutral-1000"
                          href="/tour-detail-2"
                        >
                          {t.title}
                        </Link>
                      </div>
                      <div className="card-program">
                        <div className="card-duration-tour">
                          <p className="icon-duration text-md-medium neutral-500">
                            {t.daysAndNights}
                          </p>
                        </div>
                        <div className="endtime">
                          <div className="card-price">
                            <h6 className="heading-6 neutral-1000">
                              {t.pricePerPerson}₺
                            </h6>
                            <p className="text-md-medium neutral-500">/ kişi</p>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link
                              className="btn btn-gray"
                              href="/tour-detail-2"
                            >
                              Rezervasyon Yap
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-lg-4 col-md-6">
                <div className="card-journey-small background-card">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/turlar/kapadokya-turu-806-646.jpg"
                      alt="Kapadokya Turu"
                    />
                  </div>
                  <div className="card-info background-card">
                    <div className="card-rating">
                      <div className="card-left"> </div>
                      <div className="card-right"></div>
                    </div>
                    <div className="card-title">
                      {" "}
                      <Link
                        className="heading-6 neutral-1000"
                        href="/tour-detail-2"
                      >
                        Kapadokya Turu
                      </Link>
                    </div>
                    <div className="card-program">
                      <div className="card-duration-tour">
                        <p className="icon-duration text-md-medium neutral-500">
                          2 Gün 3 Gece
                        </p>
                      </div>
                      <div className="endtime">
                        <div className="card-price">
                          <h6 className="heading-6 neutral-1000">10.000₺</h6>
                          <p className="text-md-medium neutral-500">/ kişi</p>
                        </div>
                        <div className="card-button">
                          {" "}
                          <Link className="btn btn-gray" href="/tour-detail-2">
                            Rezervasyon Yap
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card-journey-small background-card">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/turlar/karadeniz-turu-806-646.jpg"
                      alt="Kapadokya Turu"
                    />
                  </div>
                  <div className="card-info background-card">
                    <div className="card-rating">
                      <div className="card-left"> </div>
                      <div className="card-right"></div>
                    </div>
                    <div className="card-title">
                      {" "}
                      <Link
                        className="heading-6 neutral-1000"
                        href="/tour-detail-2"
                      >
                        Karadeniz Turu
                      </Link>
                    </div>
                    <div className="card-program">
                      <div className="card-duration-tour">
                        <p className="icon-duration text-md-medium neutral-500">
                          2 Gün 3 Gece
                        </p>
                      </div>
                      <div className="endtime">
                        <div className="card-price">
                          <h6 className="heading-6 neutral-1000">10.000₺</h6>
                          <p className="text-md-medium neutral-500">/ kişi</p>
                        </div>
                        <div className="card-button">
                          {" "}
                          <Link className="btn btn-gray" href="/tour-detail-2">
                            Rezervasyon Yap
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFeatured1;
