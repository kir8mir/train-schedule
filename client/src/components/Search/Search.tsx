import { FC, useState } from 'react';
import './Search.scss';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

export const Search: FC = () => {

  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  
  return (
    <section className="search">
      <input className="search__item" type="text" placeholder='77H' />
      <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      timeClassName={handleColor}
    />
    </section>
  );
}