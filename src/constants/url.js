import { API_KEY } from "./constants";

export const originals=`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const actions=`/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`
export const romance=  `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749`
