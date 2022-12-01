import { FC, useState } from 'react';
import './TrainInfo.scss';
import DatePicker from 'react-datepicker';
import { Train } from '../../_types/train';

interface Props {
  train: Train;
}

export const TrainInfo: FC<Props> = ({ train }) => {
  const { name, from, to, departure, arrival } = train;
  const [departureDate, setDepartureDate] = useState(new Date(departure));
  const [arrivalDate, setArrivalDate] = useState(new Date(arrival));

  console.log(departure);


  let handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <div className="train-info">
      <p className="train-info__item">{name}</p>
      <p className="train-info__item">{from}</p>
      <p className="train-info__item"> {to}</p>
      <div className="train-info__item">
        <DatePicker
          className=""
          showTimeSelect
          selected={departureDate}
          onChange={(date: Date) => setDepartureDate(date)}
          timeClassName={handleColor}
        />

        <p className="item__date-time">
          {`${departureDate.getHours()}:${departureDate.getMinutes()}`}
        </p>
      </div>

      <div className="train-info__item item__date">
        <DatePicker
          className="date"
          showTimeSelect
          selected={arrivalDate}
          onChange={(date: Date) => setArrivalDate(date)}
          timeClassName={handleColor}
        />
        <p className="item__date-time">
          {`${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`}
        </p>
      </div>

    </div>
  );
}