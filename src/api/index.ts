import { SwapiApi } from "./config";

export const fetchMovieList = () => SwapiApi.get('/films')