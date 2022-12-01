import { FC, useState, useEffect, useCallback } from 'react';
import './Search.scss';
import "react-datepicker/dist/react-datepicker.css";
import { Train } from '../../_types/train';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  trains: any;
  setFilteredTrains: any;
}

export const Search: FC<Props> = ({
  searchValue,
  setSearchValue,
  trains,
  setFilteredTrains
}) => {

  let handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const filter = () => {
    const filtered = [...trains].filter(
      (train: Train) => train.name.toLowerCase().includes(searchValue.toLowerCase()));
    console.log(11111123232);

    setSearchValue(searchValue)
    setFilteredTrains(filtered);
  }

  useEffect(() => {
    filter();
    setSearchValue(searchValue);
  }, [searchValue])

  return (
    <section className="search">
      <input
        className="search__item"
        type="text"
        placeholder='Please type Train Number for searching'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
    </section>
  );
}