function VideoTitle({title,overview}){
        return(
        <>
        <div className="text-white py-60 px-20 absolute" >
        <h1 className="text-4xl font-bold py-4">{title}</h1>
        <p className="w-4/12">{overview}</p>
        <span className="flex gap-4 py-4">
        <button className="px-7 py-3 bg-gray-500 border-none rounded cursor-pointer hover:opacity-70"> ▶️ Play</button>
        <button className="px-7 py-3 bg-gray-500 border-none rounded cursor-pointer hover:opacity-70">ℹ️ More Info</button>
        </span>
        </div>
        </>
    )
}

export default VideoTitle;