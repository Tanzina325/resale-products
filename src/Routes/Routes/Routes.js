import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home"
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            }
        ]
    }
])
export default router;
