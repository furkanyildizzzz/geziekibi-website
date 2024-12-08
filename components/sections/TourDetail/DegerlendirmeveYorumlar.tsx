import Link from "next/link";
import { useState } from "react";

export const DegerlendirmeVeYorumlar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="group-collapse-expand">
      <button
        className={isOpen ? "btn btn-collapse collapsed" : "btn btn-collapse"}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseReviews"
        aria-expanded="false"
        aria-controls="collapseReviews"
        onClick={() => handleOpen()}
      >
        <h6>Rate Reviews</h6>
        <svg
          width={12}
          height={7}
          viewBox="0 0 12 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
      <div
        className={isOpen ? "collapse" : "collapse show"}
        id="collapseReviews"
      >
        <div className="card card-body">
          <div className="head-reviews">
            <div className="review-left">
              <div className="review-info-inner">
                <h6 className="neutral-1000">4.95 / 5</h6>
                <p className="text-sm-medium neutral-400">(672 reviews)</p>
                <div className="review-rate">
                  <img
                    src="/assets/imgs/page/tour-detail/star.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star.svg"
                    alt="Travila"
                  />
                </div>
              </div>
            </div>
            <div className="review-right">
              <div className="review-progress">
                <div className="item-review-progress">
                  <div className="text-rv-progress">
                    <p className="text-sm-bold">Price</p>
                  </div>
                  <div className="bar-rv-progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-avarage">
                    <p>4.8/5</p>
                  </div>
                </div>
                <div className="item-review-progress">
                  <div className="text-rv-progress">
                    <p className="text-sm-bold">Service</p>
                  </div>
                  <div className="bar-rv-progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-avarage">
                    <p>4.2/5</p>
                  </div>
                </div>
                <div className="item-review-progress">
                  <div className="text-rv-progress">
                    <p className="text-sm-bold">Safety</p>
                  </div>
                  <div className="bar-rv-progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-avarage">
                    <p>4.9/5</p>
                  </div>
                </div>
                <div className="item-review-progress">
                  <div className="text-rv-progress">
                    <p className="text-sm-bold">Entertainment</p>
                  </div>
                  <div className="bar-rv-progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-avarage">
                    <p>4.7/5</p>
                  </div>
                </div>
                <div className="item-review-progress">
                  <div className="text-rv-progress">
                    <p className="text-sm-bold">Accessibility</p>
                  </div>
                  <div className="bar-rv-progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-avarage">
                    <p>5/5</p>
                  </div>
                </div>
                <div className="item-review-progress">
                  <div className="text-rv-progress">
                    <p className="text-sm-bold">Support</p>
                  </div>
                  <div className="bar-rv-progress">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="text-avarage">
                    <p>5/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-reviews">
            <div className="item-review">
              <div className="head-review">
                <div className="author-review">
                  <img
                    src="/assets/imgs/page/tour-detail/avatar.png"
                    alt="Travila"
                  />
                  <div className="author-info">
                    <p className="text-lg-bold">Sarah Johnson</p>
                    <p className="text-sm-medium neutral-500">
                      December 4, 2024 at 3:12 pm
                    </p>
                  </div>
                </div>
                <div className="rate-review">
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                </div>
              </div>
              <div className="content-review">
                <p className="text-sm-medium neutral-800">
                  The views from The High Roller were absolutely stunning! It's
                  a fantastic way to see the Strip and the surrounding area. The
                  cabins are spacious and comfortable, and the audio commentary
                  adds an extra layer of enjoyment. Highly recommend!
                </p>
              </div>
            </div>
            <div className="item-review">
              <div className="head-review">
                <div className="author-review">
                  <img
                    src="/assets/imgs/page/tour-detail/avatar.png"
                    alt="Travila"
                  />
                  <div className="author-info">
                    <p className="text-lg-bold">Sarah Johnson</p>
                    <p className="text-sm-medium neutral-500">
                      December 4, 2024 at 3:12 pm
                    </p>
                  </div>
                </div>
                <div className="rate-review">
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                </div>
              </div>
              <div className="content-review">
                <p className="text-sm-medium neutral-800">
                  The views from The High Roller were absolutely stunning! It's
                  a fantastic way to see the Strip and the surrounding area. The
                  cabins are spacious and comfortable, and the audio commentary
                  adds an extra layer of enjoyment. Highly recommend!
                </p>
              </div>
            </div>
            <div className="item-review">
              <div className="head-review">
                <div className="author-review">
                  <img
                    src="/assets/imgs/page/tour-detail/avatar.png"
                    alt="Travila"
                  />
                  <div className="author-info">
                    <p className="text-lg-bold">Sarah Johnson</p>
                    <p className="text-sm-medium neutral-500">
                      December 4, 2024 at 3:12 pm
                    </p>
                  </div>
                </div>
                <div className="rate-review">
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                  <img
                    src="/assets/imgs/page/tour-detail/star-big.svg"
                    alt="Travila"
                  />
                </div>
              </div>
              <div className="content-review">
                <p className="text-sm-medium neutral-800">
                  The views from The High Roller were absolutely stunning! It's
                  a fantastic way to see the Strip and the surrounding area. The
                  cabins are spacious and comfortable, and the audio commentary
                  adds an extra layer of enjoyment. Highly recommend!
                </p>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link active" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  5
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  ...
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
