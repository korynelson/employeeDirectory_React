import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import RandomData from './randomdata';
 
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'firstname', name: 'First Name' },
  { key: 'lastname', name: 'Last Name' },
  { key: 'email', name: 'Email' },
  { key: 'phone', name: 'Phone Number' },
  { key: 'address', name: 'Address' },
  { key: 'city', name: 'Zip Code' }

];

 
const rows = RandomData;
 
function App() {
  return (
    <DataGrid id = "table"
      columns={columns}
      rows={rows}
    />
  );
}

export default App;