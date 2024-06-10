import { Link } from "react-router-dom";
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (

    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title={m.title} />)} 
            {/* 1º forma */}
            {/* {movies.map(m => <MovieItem movie={m} />)}  */}
            {/* 2º forma passando o objeto inteiro */}
            {/* {movies.map(m => <MovieItem  {...m} />)} */}
            {/* 3º forma spred operator */}

        </ul>
    </section>

);