import './App.css';
import NavBar from './Components/NavBar';
import Table from './Components/Table';

function App() {

const texto = "Peliculas IUDigital";

  return (
    <div className="container">
  <NavBar titulo={texto}/>

  <Table />
       
    </div>
  );
}

export default App;