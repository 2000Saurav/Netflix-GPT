import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";


function useUpcomingMovies(){
    const dispatch = useDispatch();
    async function fetchUpcomingMovies(){
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
            const data = await response.json();
            console.log("Upcoming Movies Data: ", data);
            dispatch(addUpcomingMovies(data?.results))
    }


    useEffect(()=>{
        fetchUpcomingMovies();
    },[]);

}


export default useUpcomingMovies;