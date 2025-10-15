import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser,removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/Constant";

function Header() {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    
    useEffect(() => {        
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName,photoURL}));
                navigate("/Browse");

            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    },[])



    function handleSignout() {
        console.log("signout clicked");
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="absolute pl-15 pt-5 w-full bg-gradient-to-b from-black z-10 flex justify-between" >

                <img className="w-32"
                    src= {LOGO} alt="Logo"/>
                    {
                user &&
                    <div className="flex gap-4 text-white mr-10">
                        <img
                            className="w-10 mt-3 "
                            src={user?.photoURL} />

                        <button className="cursor-pointer" onClick={handleSignout}>Sign Out</button>
                    </div>
                    }  
            </div>


        </>
    )
}

export default Header;