import { useState, useEffect } from 'react';
import { getTrains } from './api/api';

import  Search  from './components/Search';
import Schedule from './components/Schedule';

import './_utils/reset.css';
import './_utils/normalize.css';


function App() {
  const [trains, setTrains] = useState();

  useEffect(() => {
    getTrains().then(data => setTrains(data.data));
  }, [])
  
  return (
    <div className="App">
      <Search />
      <Schedule />
    </div>
  );
}

export default App;
