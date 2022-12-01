import { FC, useState } from 'react';
import './TrainInfo.scss';
import DatePicker from 'react-datepicker';
import { Train } from '../../_types/train';
import { removeTrain, updateTrain } from '../../api/api';
import classnames from 'classnames';

interface Props {
  train: Train;
}

export const TrainInfo: FC<Props> = ({ train }) => {
  const { id, name, from, to, departure, arrival } = train;

  const [departureDate, setDepartureDate] = useState(new Date(departure));
  const [arrivalDate, setArrivalDate] = useState(new Date(arrival));

  const [showInputName, setShowInputName] = useState(false);
  const [inputName, setInputName] = useState(name);

  const [showInputFrom, setShowInputFrom] = useState(false);
  const [inputFrom, setInputFrom] = useState(from);

  const [showInputTo, setShowInputTo] = useState(false);
  const [inputTo, setInputTo] = useState(to);

  const [isRemoved, setIsRemoved] = useState(false);

  let handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const patchTrain = () => {
    updateTrain(
      id,
      inputName,
      inputFrom,
      inputTo,
      departureDate,
      arrivalDate);

    setShowInputName(false);
    setShowInputFrom(false);
    setShowInputTo(false)
  }

  const cancelPatching = () => {
    setInputName(name);
    setInputFrom(from);
    setInputTo(to);

    setShowInputName(false);
    setShowInputFrom(false);
    setShowInputTo(false)
  }

  return (
    <div
      className={classnames('train-info', {'none': isRemoved})}
    >
      <p
        className="train-info__item"
        onClick={() => setShowInputName(true)}
      >
        {showInputName
          ? <input
            value={inputName}
            onChange={event => setInputName(event.target.value)}
            type="text"
          />
          : inputName}
      </p>

      <p
        className="train-info__item"
        onClick={() => setShowInputFrom(true)}
      >
        {showInputFrom
          ? <input
            value={inputFrom}
            onChange={event => setInputFrom(event.target.value)}
            type="text"
          />
          : inputFrom}
      </p>

      <p
        className="train-info__item"
        onClick={() => setShowInputTo(true)}
      >
        {showInputTo
          ? <input
            value={inputTo}
            onChange={event => setInputTo(event.target.value)}
            type="text"
          />
          : inputTo}
      </p>

      <div className="train-info__item date">
        <DatePicker
          className="date-picker"
          showTimeSelect
          selected={departureDate}
          onChange={(date: Date) => setDepartureDate(date)}
          timeClassName={handleColor}
        />

        <p className="date-time">
          {`${departureDate.getHours()}:${departureDate.getMinutes()}`}
        </p>
      </div>

      <div className="train-info__item date">
        <DatePicker
          className="date-picker"
          showTimeSelect
          selected={arrivalDate}
          onChange={(date: Date) => setArrivalDate(date)}
          timeClassName={handleColor}
        />
        <p className="date-time">
          {`${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`}
        </p>
      </div>

      {showInputName || showInputFrom || showInputTo
        ? <div className="train-info__item-actions">
          <button
            className="save"
            onClick={patchTrain}
          >
            Save
          </button>

          <button
            className="cancel"
            onClick={cancelPatching}
          >
            Cancel
          </button>
        </div>
        : <button
          className="train-info__item-remove"
          onClick={() => {
            setIsRemoved(true);
            removeTrain(id);
          }}
        >
          Delete
        </button>}
    </div>
  );
}