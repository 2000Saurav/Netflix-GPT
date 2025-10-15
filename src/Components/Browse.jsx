import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";

function Browse(){

    useNowPlayingMovies();
  

    return(
        <>
        <Header/>
        <MainContainer/>
        </>
    )
}

export default Browse