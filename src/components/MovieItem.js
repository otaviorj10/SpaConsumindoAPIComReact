import { Link } from "react-router-dom";
import { MovieService } from "../Api/MovieService";

export const MovieItem = ({ id,title }) => (
    <li>
        <Link to={`movie/${id}`}>{title}</Link>
    </li>
);