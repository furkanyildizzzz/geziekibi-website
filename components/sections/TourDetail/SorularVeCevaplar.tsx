import { useState } from "react";

export const SorularVeCevaplar = () => {
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
        data-bs-target="#collapseQuestion"
        aria-expanded="false"
        aria-controls="collapseQuestion"
        onClick={() => handleOpen()}
      >
        <h6>Question Answers</h6>
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
        id="collapseQuestion"
      >
        <div className="card card-body">
          <div className="list-questions">
            <div className="item-question">
              <div className="head-question">
                <p className="text-md-bold neutral-1000">
                  Is The High Roller suitable for all ages?
                </p>
              </div>
              <div className="content-question">
                <p className="text-sm-medium neutral-800">
                  Absolutely! The High Roller offers a family-friendly
                  experience suitable for visitors of all ages. Children must be
                  accompanied by an adult.
                </p>
              </div>
            </div>
            <div className="item-question active">
              <div className="head-question">
                <p className="text-md-bold neutral-1000">
                  Can I bring food or drinks aboard The High Roller?
                </p>
              </div>
              <div className="content-question">
                <p className="text-sm-medium neutral-800">
                  Outside food and beverages are not permitted on The High
                  Roller. However, there are nearby dining options at The LINQ
                  Promenade where you can enjoy a meal before or after your
                  ride.
                </p>
              </div>
            </div>
            <div className="item-question">
              <div className="head-question">
                <p className="text-md-bold neutral-1000">
                  Is The High Roller wheelchair accessible?
                </p>
              </div>
              <div className="content-question">
                <p className="text-sm-medium neutral-800">
                  es, The High Roller cabins are wheelchair accessible, making
                  it possible for everyone to enjoy the breathtaking views of
                  Las Vegas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
