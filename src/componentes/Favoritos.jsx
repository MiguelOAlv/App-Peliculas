import { useContext } from 'react';
import PeliculasContext from '../PeliculasContext';
import PeliculaCard from './PeliculaCard';

const Favoritos = () => {
    const { favoritos } = useContext(PeliculasContext);
  
    return (
      <div className="container mt-3">
        <div className="row">
        {favoritos.length > 0 ? (
          favoritos.map(pelicula => (
            <PeliculaCard key={pelicula.id} pelicula={pelicula} esFavorito={true} />
          ))
          ) : (
            <div className="col">
                <p>No tienes películas en tu lista de "Favoritos".</p>
            </div>
        )}
        </div>
      </div>
    );
  };

export default Favoritos;