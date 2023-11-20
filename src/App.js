import logo from './logo.svg';
import './App.css';
import Contadores from './componentes/contadores';
import Cards from './componentes/Cards';
import Peliculas from './componentes/movies';
function App() {
  return (
    <div className="App">
      <Peliculas />
      <Contadores count={0} />
      <Cards />
    </div>
  );
}

export default App;
