import './App.css';
import Banner from './components/banner/Banner';
import DataGrid from './components/datagrid/Datagrid';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <DataGrid/>
    </div>
  );
}

export default App;
