import React, {useState} from 'react';
import DataTable from './components/table/index';
import RandomData from './components/table/randomdata';

function App() {
  return (
    <div className="App">
      <DataTable data = {RandomData}>

      </DataTable>
    </div>
  );
}

export default App;
