
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

function VideoBackground({movieId}){
       useMovieTrailer(movieId);
    const tarilerData = useSelector((store)=>store.movies?.traileVideo)
    // console.log(tarilerData);
    const filterdData = tarilerData?.results?.find((trailer)=> trailer?.type === "Trailer")  || tarilerData?.results?.find((trailer)=> trailer?.type === "Teaser");
    const trailerKey = filterdData?.key;

   
    return(
        <>
        <div className="w-full  " >
        <iframe className="w-full h-[100vh] object-cover"
        src={`https://www.youtube.com/embed/p4aWdkM5xF8${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerKey}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                            
        </div>
        </>
    )
}

export default VideoBackground;