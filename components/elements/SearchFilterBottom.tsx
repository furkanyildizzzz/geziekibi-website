"use client";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import MyDatePicker from "./MyDatePicker";
import { TourDailyPath } from "@/types/ApiResponseType";

interface SearchFilterBottomProps {
  destinations: TourDailyPath[];
  miniField: any;
}

const SearchFilterBottom: React.FC<SearchFilterBottomProps> = ({
  miniField,
  destinations,
}) => {
  return (
    <>
      <div className="box-bottom-search background-card">
        {!miniField && (
          <div className="item-search item-search-custom ">
            <label className="text-sm-bold neutral-500">Nereye</label>
            <Dropdown className="dropdown">
              <Dropdown.Toggle
                className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Adana
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul" className="dropdown-menu">
                {destinations.map((d) => (
                  <li key={d.id}>
                    <Link className="dropdown-item" href="#">
                      {d.name}
                    </Link>
                  </li>
                ))}

                {/* <li>
                  <Link className="dropdown-item" href="#">
                    London, England
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    New York City, USA
                  </Link>
                </li> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        <div className="item-search item-search-2 item-search-custom ">
          <label className="text-sm-bold neutral-500">Tarih</label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>

        <div className="item-search bd-none d-flex justify-content-end flex-column align-items-center gap-3">
          <div className="right-top-search align-self-end">
            <Link className="text-sm-medium need-some-help" href="/help-center">
              Yardım?
            </Link>
          </div>
          <button className="btn btn-black-lg">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Ara
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilterBottom;
