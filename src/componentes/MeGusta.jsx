import { useContext } from 'react';
import PeliculasContext from '../PeliculasContext';
import PeliculaCard from './PeliculaCard';

const MeGusta = () => {
    const { meGusta } = useContext(PeliculasContext);

    return (
        <div className="container mt-3">
            <div className="row">
            {meGusta.length > 0 ? (
                meGusta.map(pelicula => (
                    <PeliculaCard key={pelicula.id} pelicula={pelicula} esMeGusta={true} />
                ))
                ) : (
                    <div className="col">
                    <p>No tienes películas en tu lista de "Me Gusta".</p>
                </div>
            )}
            </div>
        </div>
    );
};

export default MeGusta;