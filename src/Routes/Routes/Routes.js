import { createBrowserRouter } from "react-router-dom"
import PhoneCard from "../../components/Category/PhoneCard";
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
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/:id',
                element:<PhoneCard></PhoneCard>,
                loader:({params})=>fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/phones/${params.id}`)
            },
            
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            
        ]
    }
])
export default router;
