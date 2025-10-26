import MovieCard from "./MovieCard";

function MovieList({title, movies}) {


    return (
        <>
            <div className="px-6">
                <h1 className="text-white text-3xl py-4">{title}</h1>
                <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide">
                <div className="flex">
                {
                    movies?.map((movie)=>(
                        <MovieCard  key={movie.id} posterpath={movie.poster_path}/>
                    ))
                }
                </div>
                    
                </div>
            </div>
        </>
    )
}

export default MovieList;