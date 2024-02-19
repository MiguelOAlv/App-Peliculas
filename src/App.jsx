import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import GeneroPeliculas from './componentes/GeneroPeliculas';
import MeGusta from './componentes/MeGusta';
import Favoritos from './componentes/Favoritos';
import { PeliculasProvider } from './PeliculasContext';
import './styles/app.css';

const App = () => {
  return (
    <PeliculasProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<GeneroPeliculas />} />
            <Route path="/megusta" element={<MeGusta />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </div>
      </Router>
    </PeliculasProvider>
  );
};

export default App;
