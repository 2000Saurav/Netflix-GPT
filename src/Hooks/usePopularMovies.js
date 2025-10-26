import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch} from "react-redux";
import { addPopularMovies} from "../Utils/movieSlice";
function usePopularMovies(){
    const dispatch = useDispatch();

    async function fetchPopularMovies(){
        const response =  await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
        const data = await response.json();
        
        dispatch(addPopularMovies(data.results));
    }

    useEffect(()=>{
        
        fetchPopularMovies();
    },[])
}

export default usePopularMovies;
