import { useState, useEffect } from 'react';
import { getTrains } from './api/api';
import { Train } from './_types/train';

import Search from './components/Search';
import Schedule from './components/Schedule';

import './_utils/reset.css';
import './_utils/normalize.css';

function App() {
  const [trains, setTrains] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredTrains, setFilteredTrains] = useState([...trains]);
  const [startDate, setStartDate] = useState(new Date());

  const filter = () => {
    const filtered = [...trains].filter(
      (train: Train) => train.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredTrains(filtered);
  }


  useEffect(() => {
    getTrains().then(res => setTrains(res.data));
    filter();
  }, [searchValue, trains, filteredTrains])

  return (
    <div className="App">
      <Search
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <Schedule trains={filteredTrains} />
    </div>
  );
}

export default App;
