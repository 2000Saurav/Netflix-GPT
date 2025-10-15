import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


function MainContainer(){
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    // console.log("Movies in Main Container: ", movies);
    

    if(!movies || movies.length === 0) return null;
    
    const {title, overview, id} = movies[0];
    // console.log("Title: ", title, " Overview: ", overview, " ID: ", id);
    
    
    return(
        <>
        
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    
        </>
    )

    
}

export default MainContainer;