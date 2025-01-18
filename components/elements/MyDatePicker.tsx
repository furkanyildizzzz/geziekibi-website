"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale/tr";

export default function MyDatePicker({
  startDate,
  setStartDate,
}: {
  startDate: Date;
  setStartDate: (date: Date) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  return (
    <div
      className="box-calendar-date"
      onClick={toggleOpen}
      style={{ cursor: "pointer" }}
    >
      {
        <DatePicker
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
            handleClose(); // Close the picker after selection
          }}
          // open={isOpen}
          className="search-input datepicker"
          locale={tr}
          minDate={new Date()}
        />
      }
    </div>
  );
}
