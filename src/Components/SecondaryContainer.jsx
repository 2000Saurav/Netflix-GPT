import usePopularMovies from "../Hooks/usePopularMovies";
import { API_OPTIONS } from "../Utils/Constant";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
usePopularMovies();

const popularmovies =  useSelector((store)=> store.movies?.popularMovies)
console.log("Popular Movies in Secondary Container: ", popularmovies);

return (
    <>
        <div>
            <MovieList />
        </div>
    </>
)
}
export default SecondaryContainer;