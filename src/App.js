import React, {useEffect, useState} from 'react';
import DataTable from './components/table/index';
import RandomData from './components/table/randomdata';

function App() {
  const[data, setData] = useState([]);
  const[query, setQuery] = useState('');

  useEffect(() => {
    setData(RandomData);
  }, [])

  const search = (rows) => {
    console.log(rows);
    return rows.filter((row) => row.firstname.toLowerCase().indexOf(query)> -1);
  }

  return (
    <div className="App">
      <div>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div>
        <DataTable data = {search(data)}></DataTable>
      </div>
    </div>
  );
}

export default App;
