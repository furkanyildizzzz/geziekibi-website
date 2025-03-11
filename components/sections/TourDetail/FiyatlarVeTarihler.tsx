import { CurrencyDisplayNames } from "@/lib/enums";
import { TourDateSuccessResponse } from "@/types/ApiResponseType";
import formatDate from "@/util/formatDate";
import React, { useState } from "react";

export const FiyatlarVeTarihler = ({
  tourDates,
}: {
  tourDates: TourDateSuccessResponse[];
}) => {
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
        <h6>Fiyatlar Ve Tarihler</h6>
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
            {tourDates.map((d, i) => (
              <div
                key={d.id}
                className={"item-question" + (i % 2 === 1 ? " active" : "")}
              >
                <div className="head-question">
                  <p className="text-md-bold neutral-1000">
                    {formatDate(d.startDate.toString())} -{" "}
                    {formatDate(d.endDate.toString())}
                  </p>
                </div>
                <div className="content-question">
                  <div
                    className="prices-table"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 2fr", // Adjust column widths
                      gap: "0.5rem", // Space between rows
                      alignItems: "center",
                    }}
                  >
                    {d.prices.map((p, index) => (
                      <React.Fragment key={index}>
                        <span className="text-sm-medium neutral-800">
                          {p.name}
                        </span>
                        <span className="text-sm-medium neutral-800">
                          {p.price + " " + CurrencyDisplayNames[p.currency]}
                        </span>
                        <span className="text-sm-medium neutral-800">
                          {p.description}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
