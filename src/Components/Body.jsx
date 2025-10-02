import LoginForm from "./LoginForm"
import Browse from "./Browse"
import { createBrowserRouter,RouterProvider} from "react-router"

function Body(){
    
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <LoginForm/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
        ]
    )

    return(
        <>
        <div>
        <RouterProvider router={appRouter}/>
        </div>
        </>
    )
}

export default Body