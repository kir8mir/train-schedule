import { FC, useState } from 'react';
import AddTrain from '../AddTrain';
import TrainInfo from '../TrainInfo';
import './Schedule.scss';
import { Train } from '../../_types/train';

interface Props {
  trains: Train[];
}

export const Schedule: FC<Props> = ({ trains }) => {

  const [newTrain, setNewTrain] = useState(false);

  return (
    <section className="schedule">
      <span
        className="new-train"
        onClick={() => setNewTrain(value => !value)}
      >
        Add new Train
      </span>

      <div className="schedule__titles titles">
        <h4 className="titles__number">№ Train</h4>
        <h4 className="titles__number">From</h4>
        <h4 className="titles__number">To</h4>
        <h4 className="titles__number">Departure</h4>
        <h4 className="titles__number">
          Arrival
        </h4>
      </div>


      {
        newTrain
          ? <AddTrain />
          : trains.map(train => (
            <TrainInfo key={train.id} train={train} />
          ))}

    </section>
  );
}