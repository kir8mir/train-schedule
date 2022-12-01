import { FC, useState } from 'react';
import './TrainInfo.scss';

export const TrainInfo:FC = () => {

  return (
    <div className="train-info">
      <p className="train-info__item">77H</p>
      <p className="train-info__item"><span>FROM: Kyiv</span><span>TO: Lviv</span></p>
      <p className="train-info__item"><span>Departure: 12.12.2022</span><span>Arrival: 12.13.2022</span></p>
    </div>
  );
}