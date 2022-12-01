import { FC, useState } from 'react';
import './Search.scss';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  startDate: Date;
  setStartDate: (value: Date) => void;
}

export const Search: FC<Props> = ({
  searchValue,
  setSearchValue,
  setStartDate,
  startDate,
}) => {

  let handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <section className="search">
      <input
        className="search__item"
        type="text"
        placeholder='Please type Train Number for searching'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </section>
  );
}