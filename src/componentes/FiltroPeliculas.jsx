import { useState, useEffect } from 'react';
import '../styles/filtro.css';

const FiltroPeliculas = ({ setPeliculasFiltradas }) => {
    const [peliculas, setPeliculas] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [genero, setGenero] = useState('');
    const [filtroNombre, setFiltroNombre] = useState('');
    const api_key = 'afc326a6ba31a3a6414778599df8d922';

    // Cargar géneros
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setGeneros(data.genres);
            })
            .catch(error => console.log(error));
    }, [api_key]);

    // Cargar películas basadas en el género seleccionado
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-ES`;
        if (genero) {
            url += `&with_genres=${genero}`;
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results);
            })
            .catch(error => console.log(error));
    }, [genero, api_key]);

    // Filtrar películas por nombre
    useEffect(() => {
        const resultadosFiltro = peliculas.filter(pelicula =>
            pelicula.title.toLowerCase().includes(filtroNombre.toLowerCase())
        );
        setPeliculasFiltradas(resultadosFiltro);
    }, [filtroNombre, peliculas, setPeliculasFiltradas]);

    return (
        <div className="contenedor-filtro">
            <input
                className="filtro-input"
                type="text"
                placeholder="Buscar por nombre..."
                value={filtroNombre}
                onChange={(e) => setFiltroNombre(e.target.value)}
            />
            <select className="filtro-select" value={genero} onChange={(e) => setGenero(e.target.value)}>
                <option value="">Selecciona un género</option>
                {generos.map(genero => (
                    <option key={genero.id} value={genero.id}>{genero.name}</option>
                ))}
            </select>
        </div>
    );
};

export default FiltroPeliculas;