"use client";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import MyDatePicker from "./MyDatePicker";
import { TourDailyPath } from "@/types/ApiResponseType";
import { MouseEvent, useEffect, useState } from "react";
import { SearchParams } from "@/app/api/tour/searchTours";
import { useSearchParams } from "next/navigation";

interface SearchFilterBottomProps {
  destinations: TourDailyPath[];
  miniField: any;
  handleSearch: (searchParams: SearchParams) => Promise<void> | undefined;
}

const SearchFilterBottom: React.FC<SearchFilterBottomProps> = ({
  miniField,
  destinations,
  handleSearch,
}) => {
  const searchParams = useSearchParams();

  const startDateParam = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate")!)
    : null;

  const destinationParam = searchParams.get("destination");

  const [destination, setDestination] = useState<TourDailyPath | null>(
    destinationParam
      ? destinations.find((d) => d.id === parseInt(destinationParam)) || null
      : null
  );
  const [startDate, setStartDate] = useState(startDateParam || new Date());

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ startDate, destination });
    await handleSearch({ startDate, destination, categoryId: null });
  };

  useEffect(() => {
    if (destinationParam) {
      setDestination(
        destinations.find((d) => d.id === parseInt(destinationParam)) || null
      );
    }
  }, [destinations]);

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
                {destination ? destination.name : "Seçiniz"}
              </Dropdown.Toggle>
              <Dropdown.Menu
                as="ul"
                className="dropdown-menu"
                style={{ maxHeight: "300px", overflowY: "scroll" }}
              >
                <li
                  className="dropdown-item"
                  key={0}
                  onClick={() => setDestination(null)}
                >
                  Seçiniz
                </li>
                {destinations.map((d) => (
                  <li
                    className="dropdown-item"
                    key={d.id}
                    onClick={() => setDestination(d)}
                  >
                    {d.name}
                  </li>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        <div className="item-search item-search-2 item-search-custom ">
          <label className="text-sm-bold neutral-500">Tarih</label>
          <MyDatePicker startDate={startDate} setStartDate={setStartDate} />
        </div>

        <div className="item-search bd-none d-flex justify-content-end flex-column align-items-center gap-3">
          <div className="right-top-search align-self-end">
            <Link className="text-sm-medium need-some-help" href="/help-center">
              Yardım?
            </Link>
          </div>
          <button className="btn btn-black-lg" onClick={handleClick}>
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
