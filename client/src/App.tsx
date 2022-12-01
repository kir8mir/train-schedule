import { useState, useEffect } from 'react';
import { getTrains } from './api/api';

import  Search  from './components/Search';
import Schedule from './components/Schedule';

import './_utils/reset.css';
import './_utils/normalize.css';
import { Train } from './_types/train';


function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getTrains().then(res => setTrains(res.data));
  }, [])
  
  return (
    <div className="App">
      <Search />
      <Schedule trains={trains} />
    </div>
  );
}

export default App;
