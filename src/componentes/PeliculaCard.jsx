import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import PeliculasContext from '../PeliculasContext';
import '../styles/peliculaCard.css';

const PeliculaCard = ({ pelicula, esMeGusta, esFavorito }) => {
    const { quitarDeMeGusta, quitarDeFavoritos } = useContext(PeliculasContext);

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                <div className="card-body">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <p className="card-text">Calificación: {pelicula.vote_average.toFixed(2)}/10</p>
                    <div className="d-flex justify-content-center align-items-center">
                        {esMeGusta && (
                            <button onClick={() => quitarDeMeGusta(pelicula.id)} className="btn btn-danger quitar-lista-btn">
                                Quitar de Me Gusta<FontAwesomeIcon className="icono-quitar" icon={faTimes}/>
                            </button>
                        )}
                        {esFavorito && (
                            <button onClick={() => quitarDeFavoritos(pelicula.id)} className="btn btn-danger quitar-lista-btn">
                                Quitar de Favoritos<FontAwesomeIcon className="icono-quitar" icon={faTimes}/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeliculaCard;


