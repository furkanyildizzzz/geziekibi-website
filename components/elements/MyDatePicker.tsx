"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale/tr";

export default function MyDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        className="search-input datepicker"
        locale={tr}
      />
    </>
  );
}
