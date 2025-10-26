import usePopularMovies from "../Hooks/usePopularMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

function SecondaryContainer() {
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
const popularMovies = useSelector((store)=> store.movies?.popularMovies);
const nowPlayingMovies = useSelector((store)=> store?.movies?.nowPlayingMovies)
const topRatedMovies = useSelector((store)=> store?.movies?.topRatedMovies);
const upcomingMovies = useSelector((store)=> store?.movies?.upcomingMovies);
console.log("Popular Movies in SecondaryContainer: ", upcomingMovies);

return (
    <>
        <div className="bg-black ">
        <div className="-mt-52  relative z-20">
            <MovieList title="Now Playing" movies={nowPlayingMovies}/>
            <MovieList title="Popular Movies" movies={popularMovies}/>
            <MovieList title="Top Rated" movies={topRatedMovies}/>
            <MovieList title="Upcoming" movies={upcomingMovies}/>
        </div>
        </div>
    </>
)
}
export default SecondaryContainer;