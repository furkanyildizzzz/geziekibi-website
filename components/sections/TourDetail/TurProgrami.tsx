import { TourDailyForm } from "@/types/ApiResponseType";
import { useState } from "react";

export const TurProgrami = ({
  dailyForms,
}: {
  dailyForms: TourDailyForm[];
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
        <h6>Tur Programı</h6>
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
            {dailyForms.map((f, i) => (
              <div className={"item-question" + (i % 2 === 1 ? " active" : "")}>
                <div className="head-question">
                  <p className="text-md-bold neutral-1000">{i + 1}. Gün</p>
                </div>
                <div>
                  <strong>Güzergah: </strong>
                  <span>{f.dailyPaths.map((s) => s.name).join(" --> ")}</span>
                </div>
                {f.dailyVisitingPlaces.length > 0 && (
                  <div>
                    <strong>Günün Gezi Noktaları: </strong>
                    <span
                      className="badge bg-primary text-wrap fst-italic"
                      style={{ fontSize: "inherit" }}
                    >
                      {f.dailyVisitingPlaces.map((s) => s.name).join(", ")}
                    </span>
                  </div>
                )}
                <div
                  className="content-question"
                  dangerouslySetInnerHTML={{
                    __html: f.description,
                  }}
                ></div>
                <div>
                  <strong>Kahvaltı: </strong>
                  <span>{f.breakfast}</span>
                </div>
                <div>
                  <strong>Öğle Yemeği: </strong>
                  <span>{f.lunch}</span>
                </div>
                <div>
                  <strong>Akşam Yemeği: </strong>
                  <span>{f.dinner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
