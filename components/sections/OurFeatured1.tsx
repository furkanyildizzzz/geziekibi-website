"use client";

import Link from "next/link";
import CategoryFilter from "../elements/CategoryFilter";
import { FeaturedTourListSuccessResponse } from "@/types/ApiResponseType";
import imageFunctions from "@/util/imageFunctions";
import { useAppDispatch } from "@/redux/Hooks";
import { setNavigationData } from "@/redux/Reducers/NavigationDataSlice";
import { CurrencyDisplayNames } from "@/lib/enums";

interface OurFeatured1Props {
  tours: FeaturedTourListSuccessResponse[];
}

const OurFeatured1: React.FC<OurFeatured1Props> = ({ tours }) => {
  const dispatch = useAppDispatch();

  const handleSetNavigationData = (
    title: string,
    seoLink: string,
    slugType: string
  ) => {
    console.log({ seoLink });
    dispatch(
      setNavigationData({
        name: "title",
        value: title,
      })
    );
    dispatch(
      setNavigationData({
        name: "seoLink",
        value: seoLink,
      })
    );
    dispatch(
      setNavigationData({
        name: "slugType",
        value: slugType,
      })
    );

    sessionStorage.setItem("title", title);
    sessionStorage.setItem("slugType", slugType);
    sessionStorage.setItem("seoLink", seoLink);
  };

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
                <div className="col-lg-4 col-md-6" key={t.id}>
                  <div className="card-journey-small background-card">
                    <div className="card-image">
                      <img
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
                          href={"turlar/" + t.seoLink}
                          onClick={() =>
                            handleSetNavigationData(t.title, t.seoLink, "tour")
                          }
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
                              {t.pricePerPerson}{" "}
                              {CurrencyDisplayNames[t.currency]}
                            </h6>
                            <p className="text-md-medium neutral-500">/ kişi</p>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link
                              className="btn btn-gray"
                              href={"turlar/" + t.seoLink}
                            >
                              İncele
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
    </>
  );
};

export default OurFeatured1;
