/* eslint-disable react-hooks/exhaustive-deps */
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
  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    getTrains().then(res => {
      setTrains(res.data)
      if (!filteredTrains.length) {
        setFilteredTrains(res.data);
      }
    });
    console.log(filteredTrains);
    
    // sort();
  }, [searchValue]);

  return (
    <div className="App">
      <Search
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setFilteredTrains={setFilteredTrains}
        trains={trains}

      />
      <Schedule filteredTrains={filteredTrains} trains={trains} setFilteredTrains={setFilteredTrains} />
    </div>
  );
}

export default App;
