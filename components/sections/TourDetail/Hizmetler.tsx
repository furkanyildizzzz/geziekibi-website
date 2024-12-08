import { TourServiceTypeEnum } from "@/lib/enums";
import { TourService, TourSuccessResponse } from "@/types/ApiResponseType";
import { useState } from "react";

export const Hizmetler = ({ services }: { services: TourService[] }) => {
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
        data-bs-target="#collapseIncluded"
        aria-expanded="false"
        aria-controls="collapseIncluded"
        onClick={() => handleOpen()}
      >
        <h6>Hizmetler</h6>
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
        id="collapseIncluded"
      >
        <div className="card card-body">
          <div className="row">
            <div className="col-lg-6">
              <p className="text-md-bold">Dahil:</p>
              <ul>
                {services
                  .filter((s) => s.type === TourServiceTypeEnum.INCLUDED)
                  .map((s) => (
                    <li key={s.service.id}>{s.service.name}</li>
                  ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <p className="text-md-bold">Hariç:</p>
              <ul>
                {services
                  .filter((s) => s.type === TourServiceTypeEnum.EXCLUDED)
                  .map((s) => (
                    <li key={s.service.id}>{s.service.name}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
