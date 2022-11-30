import { FC, useState } from 'react';
import './Search.scss';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

export const Search: FC = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="search">
      <input className="search__item" type="text" placeholder='Kyiv' />
      <input className="search__item" type="text" placeholder='Lviv' />
      <input className="search__item" type="text" placeholder='77H' />
      <DatePicker className="search__item-date" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
    </section>
  );
}