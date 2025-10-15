
import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideo} from "../Utils/movieSlice"

function useMovieTrailer(movie_id){
    const dispatch = useDispatch();
    const traileVideo = useSelector((store)=>store.movies?.traileVideo)
    async function getMovieTrailer(){
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrailerVideo(json))
        // console.log(json);
    }


    
    useEffect(()=>{
        if(!movie_id) return;
        if(traileVideo && traileVideo.id === movie_id) return;
        getMovieTrailer();
    },[movie_id])

}

export default useMovieTrailer;