import { FC, useState } from 'react';
import TrainInfo from '../TrainInfo';
import './Schedule.scss';

export const Schedule:FC = () => {

  return (
    <section className="schedule">
      <div className="schedule__titles titles">
        <h4 className="titles__number">№ Train</h4>
        <h4 className="titles__number">FROM/TO</h4>
        <h4 className="titles__number">Date</h4>
        <h4 className="titles__number">Route Time</h4>
      </div>

      <TrainInfo />
    </section>
  );
}