
function Pop({message, visible}) {
    return (
        visible &&
        <div className=" fixed top-5 right-5 bg-black text-white p-3 rounded-md z-50">
            {message}       
        </div>
    )
}

export default Pop