import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MovieService } from "../Api/MovieService";
import { Link } from "react-router-dom";


export const Home = () => {
    const [movies, setMovies] = useState([]);


    const fetchMovies = async () => {
        const { data } = await MovieService.getMovies();

        setMovies(data.results);
    }
    useEffect(() => {
        fetchMovies();

    }, []);

    return (
        <MoviesContainer>
            <MoviesList   movies={movies} />
        </MoviesContainer>

    )
};

