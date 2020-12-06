import React, {useEffect, useState} from 'react';
import DataTable from './components/table/index';
import RandomData from './components/table/randomdata';

function App() {
  const[data, setData] = useState([]);
  const[query, setQuery] = useState('');
  const[searchColumns, setSearchColumns] = useState(["firstname", "lastname"])
  const columns = data[0] && Object.keys(data[0]);


  useEffect(() => {
    setData(RandomData);
  }, [])

  const search = (rows) => {
    return rows.filter((row) => 
    searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1))
  }

  return (
    <div className="App">
      <div>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div>
        <DataTable data = {data} searchData = {search(data)} setSearchColumns = {setSearchColumns} searchColumns={searchColumns}></DataTable>
      </div>
    </div>
  );
}

export default App;
