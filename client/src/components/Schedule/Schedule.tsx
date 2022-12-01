import classnames from 'classnames';
import { FC, useState, useEffect } from 'react';
import AddTrain from '../AddTrain';
import TrainInfo from '../TrainInfo';
import './Schedule.scss';
import { Train } from '../../_types/train';

interface Props {
  trains: Train[];
  filteredTrains: Train[];
  setFilteredTrains: (arr: any) => void;
}

export const Schedule: FC<Props> = ({ trains, filteredTrains, setFilteredTrains }) => {

  const [newTrain, setNewTrain] = useState(false);
  const [sortType, setSortType] = useState('NONE');

  const [upDown, setUpDown] = useState(false);
  

  const sort = () => {
    switch (sortType) {
      case 'NONE':
        setFilteredTrains(filteredTrains);
        break;
      case 'NAME':
        upDown
          ? setFilteredTrains([...filteredTrains].sort((t1: Train, t2: Train) => t1.name.localeCompare(t2.name)))
          : setFilteredTrains([...filteredTrains].sort((t1: Train, t2: Train) => t2.name.localeCompare(t1.name)));
        break;

      case 'FROM':
        upDown
          ? setFilteredTrains([...filteredTrains].sort((t1: Train, t2: Train) => t1.from.localeCompare(t2.from)))
          : setFilteredTrains([...filteredTrains].sort((t1: Train, t2: Train) => t2.from.localeCompare(t1.from)));
        break;

      case 'TO':
        upDown
          ? setFilteredTrains([...filteredTrains].sort((t1: Train, t2: Train) => t1.to.localeCompare(t2.to)))
          : setFilteredTrains([...filteredTrains].sort((t1: Train, t2: Train) => t2.to.localeCompare(t1.to)));
        break;

      case 'DEPARTURE':
        upDown
          ? setFilteredTrains([...filteredTrains].sort(
            (t1: Train, t2: Train) => new Date(t1.departure).getTime() - new Date(t2.departure).getTime()))
          : setFilteredTrains([...filteredTrains].sort(
            (t1: Train, t2: Train) => new Date(t2.departure).getTime() - new Date(t1.departure).getTime()))
        break;

      case 'ARRIVAL':
        upDown
          ? setFilteredTrains([...filteredTrains].sort(
            (t1: Train, t2: Train) => new Date(t1.arrival).getTime() - new Date(t2.arrival).getTime()))
          : setFilteredTrains([...filteredTrains].sort(
            (t1: Train, t2: Train) => new Date(t2.arrival).getTime() - new Date(t1.arrival).getTime()))
        break;
    }

    console.log(sortType);

  }

  useEffect(() => {
    sort();
  }, [sortType, upDown])

  return (
    <section className="schedule">
      <span
        className={classnames('new-train', { 'onHover': newTrain })}
        onClick={() => setNewTrain(value => !value)}
      >
        Add new Train
      </span>

      <div className="schedule__titles titles">
        <h4
          className="titles__number"
          onClick={() => {
            setUpDown(value => !value);
            setSortType('NAME')
          }}
        >
          № Train
        </h4>

        <h4
          className="titles__number"
          onClick={() => {
            setUpDown(value => !value);
            setSortType('FROM')
          }}
        >
          From
        </h4>
        <h4
          className="titles__number"
          onClick={() => {
            setUpDown(value => !value);
            setSortType('TO')
          }}
        >
          To
        </h4>
        <h4
          className="titles__number"
          onClick={() => {
            setUpDown(value => !value);
            setSortType('DEPARTURE')
          }}
        >
          Departure
        </h4>
        <h4
          className="titles__number"
          onClick={() => {
            setUpDown(value => !value);
            setSortType('ARRIVAL')
          }}
        >
          Arrival
        </h4>
      </div>


      {
        newTrain
          ? <AddTrain setFilteredTrains={setFilteredTrains} />
          : filteredTrains.length
            ? filteredTrains.map(train => (
              <TrainInfo key={train.id} train={train} />
            ))
            : trains.map(train => (
              <TrainInfo key={train.id} train={train} />
            ))
      }

    </section>
  );
}