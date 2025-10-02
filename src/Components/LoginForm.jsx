import { useState } from "react"
import Header from "./Header"
function LoginForm(){
    const [isSignIn, setIsSignIn] = useState(true);
    function handleLoginForm(){
        setIsSignIn(!isSignIn);
    }

    return(
        <>
        <div>
        <Header/>
        <div className="absolute">
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_medium.jpg" alt="background image" />
        </div>
        <form className="absolute bg-black w-3/12 text-white my-32 mx-auto left-0 right-0 p-10 flex flex-col gap-5 opacity-80">
            
            <h1 className="text-3xl font-bold">{isSignIn? "Sign In": "Sign Up"}</h1>
            {
                !isSignIn && <input type="text" placeholder="Enter Your Name" className="p-3 bg-gray-700 rounded outline-none" /> 

            }
            <input type="email" placeholder="Enter Your Email" className="p-3 bg-gray-700 rounded outline-none"/>
            <input type="password" placeholder="Enter Your Password" className="p-3 bg-gray-700 rounded outline-none"/>
            <button className="bg-red-800 p-2 text-xl cursor-pointer">{isSignIn? "Sign In": "Sign Up"}</button>
            <p className="cursor-pointer" onClick={handleLoginForm}>{isSignIn ? "New To Netflix? Sign Up": "Already User? Sign In"} </p>
        </form>
        </div>
        </>
    )
}

export default LoginForm