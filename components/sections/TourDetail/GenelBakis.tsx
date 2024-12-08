import { useState } from "react";

export const GenelBakis = ({ body }: { body: string }) => {
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
        data-bs-target="#collapseOverview"
        aria-expanded="false"
        aria-controls="collapseOverview"
        onClick={() => handleOpen()}
      >
        <h6>Genel Bakış</h6>
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
        id="collapseOverview"
      >
        <div
          className="card card-body"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </div>
    </div>
  );
};
