import { IMG_CDN_URL } from "../Utils/Constant";

function MovieCard({posterpath}) {
    return(
        <>
        
        <div className="w-48 pr-4 cursor-pointer rounded hover:scale-110 transition-transform duration-300 ease-in-out">
            <img  src={IMG_CDN_URL+posterpath} />
        </div>
        </>
    )
}

export default MovieCard;