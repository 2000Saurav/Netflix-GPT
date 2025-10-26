import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch } from "react-redux"; 
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

function useTopRatedMovies(){
    const dispatch = useDispatch();
    async function fetchTopRatedMovies(){
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        console.log("Top Rated Movies Data: ", data);
        dispatch(addTopRatedMovies(data?.results))
    }

    useEffect(()=>{
        fetchTopRatedMovies();
    },[])
    
}



export default useTopRatedMovies;