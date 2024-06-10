import axios from "axios";

const API_KEY = '5c234120286d3e8ebac4833f3bb3d9d3';
const baseUrl = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${baseUrl}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){
        return axios(withBaseUrl(`movie/${id}`));
    }
}

