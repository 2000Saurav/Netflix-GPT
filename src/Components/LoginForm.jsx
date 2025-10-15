import { useState, useRef } from "react"
import Header from "./Header"
import { validate } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { PHOTO_AVATAR } from "../Utils/Constant";

import { updateProfile} from "firebase/auth";
import Pop from "./Pop";


function LoginForm() {

    const [isSignIn, setIsSignIn] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const [popMessage, setPopMessage] = useState("");
    const [showPop, setShowPop] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handleToggle() {
        setIsSignIn(!isSignIn);

    }

    function handlePopMessage(message) {
        setPopMessage(message);
        setShowPop(true);
        setTimeout(() => {
            setShowPop(false);
        }, 6000);
    }
    function handleValidation() {
        const message = validate(emailRef.current.value, passwordRef.current.value);
        setErrorMsg(message);

        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: nameRef.current.value, photoURL: PHOTO_AVATAR
                    }).then(async () => {
                        await user.reload();
                        handlePopMessage("Registration Successful! Please Sign In to Continue.");

                    }).catch((error) => {
                        console.log(error);
                    });


                    if (nameRef.current) nameRef.current.value = "";
                    emailRef.current.value = "";
                    passwordRef.current.value = "";


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage + " " + errorCode);
                    console.log(errorCode, errorMessage);
                    if (nameRef.current) nameRef.current.value = "";
                    emailRef.current.value = "";
                    passwordRef.current.value = "";
                });

        }
        else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user + " user logged in");

                    if (nameRef.current) nameRef.current.value = "";
                    emailRef.current.value = "";
                    passwordRef.current.value = "";


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage + " " + errorCode);
                    if (nameRef.current) nameRef.current.value = "";
                    emailRef.current.value = "";
                    passwordRef.current.value = "";
                });

        }
    }

    return (
        <>
            <div>
                <Header />
                <div className="absolute">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_medium.jpg" alt="background image" />
                </div>
                <form onSubmit={(e) => e.preventDefault()}
                    className="absolute bg-black w-3/12 text-white my-32 mx-auto left-0 right-0 p-10 flex flex-col gap-5 opacity-80">

                    <h1 className="text-3xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {
                        !isSignIn && <input ref={nameRef} type="text" placeholder="Enter Your Name" className="p-3 bg-gray-700 rounded outline-none" />

                    }
                    <input ref={emailRef} type="email" placeholder="Enter Your Email" className="p-3 bg-gray-700 rounded outline-none" />

                    <input ref={passwordRef} type="password" placeholder="Enter Your Password" className="p-3 bg-gray-700 rounded outline-none" />

                    {errorMsg && <p className="text-lg text-red-800 font-bold">{errorMsg}</p>}

                    <button type="button" onClick={handleValidation} className="bg-red-800 p-2 text-xl cursor-pointer">{isSignIn ? "Sign In" : "Sign Up"}</button>

                    <p className="cursor-pointer" onClick={handleToggle}>{isSignIn ? "New To Netflix? Sign Up" : "Already User? Sign In"} </p>
                </form>
                <Pop message={popMessage} visible={showPop} />
            </div>
        </>
    )
}

export default LoginForm