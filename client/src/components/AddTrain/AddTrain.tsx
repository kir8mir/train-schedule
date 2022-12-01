import { FC, useState } from 'react';
import './AddTrain.scss';
import DatePicker from 'react-datepicker';
import { addTrain } from '../../api/api';

export const AddTrain: FC = () => {
  const [newName, setNewName] = useState('');
  const [newFrom, setNewFrom] = useState('');
  const [newTo, setNewTo] = useState('');
  const [newDeparture, setNewDeparture] = useState(new Date());
  const [newArrival, setNewArrival] = useState(new Date());

  let handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const addNewTrain = () => {
    if (newName && newFrom && newTo) {
      addTrain(
        newName,
        newFrom,
        newTo,
        newDeparture,
        newArrival);

        setNewName('');
        setNewFrom('');
        setNewTo('');
    } else {
      alert('Fill all sections');
    }
  }

  return (
    <section className="add-train">
      <input
        className='add-train__input'
        type="text"
        placeholder='772Y'
        value={newName}
        onChange={event => setNewName(event.target.value)}
      />
      <input
        className='add-train__input'
        type="text"
        placeholder='Kyiv'
        value={newFrom}
        onChange={event => setNewFrom(event.target.value)}
      />
      <input
        type="text"
        placeholder='Lviv'
        className='add-train__input'
        value={newTo}
        onChange={event => setNewTo(event.target.value)}
      />
      <DatePicker
        className='add-train__date'
        showTimeSelect
        selected={newDeparture}
        onChange={(date: Date) => setNewDeparture(date)}
        timeClassName={handleColor}
      />
      <DatePicker
        className='add-train__date'
        showTimeSelect
        selected={newArrival}
        onChange={(date: Date) => setNewArrival(date)}
        timeClassName={handleColor}
      />
      <button
        className='add-train__submit'
        type='submit'
        onClick={addNewTrain}
      >
        Add
      </button>
    </section>
  );
}