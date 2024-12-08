import { useState } from "react";

export const YorumEkle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="group-collapse-expand">
      <button
        className={isOpen ? "btn btn-collapse collapsed" : "btn btn-collapse"}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseAddReview"
        aria-expanded="false"
        aria-controls="collapseAddReview"
        onClick={() => handleOpen()}
      >
        <h6>Add a review</h6>
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
        id="collapseAddReview"
      >
        <div className="card card-body">
          <div className="box-type-reviews">
            <div className="row">
              <div className="col-lg-4">
                <div className="box-type-review">
                  <p className="text-sm-bold text-type-rv">Price</p>
                  <p className="rate-type-review">
                    {" "}
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
                  </p>
                </div>
                <div className="box-type-review">
                  <p className="text-sm-bold text-type-rv">Service</p>
                  <p className="rate-type-review">
                    {" "}
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
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-type-review">
                  <p className="text-sm-bold text-type-rv">Safety</p>
                  <p className="rate-type-review">
                    {" "}
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
                  </p>
                </div>
                <div className="box-type-review">
                  <p className="text-sm-bold text-type-rv">Entertainment</p>
                  <p className="rate-type-review">
                    {" "}
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
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-type-review">
                  <p className="text-sm-bold text-type-rv">Accessibility</p>
                  <p className="rate-type-review">
                    {" "}
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
                  </p>
                </div>
                <div className="box-type-review">
                  <p className="text-sm-bold text-type-rv">Support</p>
                  <p className="rate-type-review">
                    {" "}
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
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-form-reviews">
            <h6 className="text-md-bold neutral-1000 mb-15">Leave feedback</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your comment"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn btn-black-lg-square">
                  Submit review
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
