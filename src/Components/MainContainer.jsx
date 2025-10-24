import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";


function MainContainer(){
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  

    if(!movies || movies.length === 0) return null;
    
    const {title, overview, id} = movies[0];
    
    
    return(
        <>
        
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
        <SecondaryContainer/>
        </>
    )

    
}

export default MainContainer;