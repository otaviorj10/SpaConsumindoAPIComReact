import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MovieService } from "../Api/MovieService";

export const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState([]);


    const fetchMovie = async () => {
        const { data } = await MovieService.getMovieById(id);

        setMovie(data);

        console.log(data);
    }
    useEffect(() => {
        fetchMovie();

    }, []);

    return (

        <>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>
        </>
    )
} 