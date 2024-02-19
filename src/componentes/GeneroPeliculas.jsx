import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react'; // Importar useState
import PeliculasContext from '../PeliculasContext';
import FiltroPeliculas from './FiltroPeliculas';

const GeneroPeliculas = () => {
    const { agregarAFavoritos, agregarAMegusta } = useContext(PeliculasContext);
    const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);     

    return (
        <div className="container mt-3">
        <FiltroPeliculas setPeliculasFiltradas={setPeliculasFiltradas} agregarAFavoritos={agregarAFavoritos} />
            <div className="row">
                {peliculasFiltradas.length > 0 ? (
                    peliculasFiltradas.map((pelicula) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={pelicula.id}>
                            <div className="card h-100">
                                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                                <div className="card-body">
                                    <h5 className="card-title titulo-fijo">{pelicula.title}</h5>
                                    <div className="d-flex justify-content-between align-items-center flex-nowrap">
                                        <button className="btn btn-secondary m-md-1 flex-md-fill">Calificación: {pelicula.vote_average.toFixed(2)}/10</button>
                                        <button onClick={() => agregarAMegusta(pelicula)} className="btn btn-danger m-md-1">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                        <button onClick={() => agregarAFavoritos(pelicula)} className="btn btn-primary m-md-1">
                                            <FontAwesomeIcon icon={faStar} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col">
                        <p>No se encontraron películas que coincidan con los criterios de búsqueda.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeneroPeliculas;