import { createBrowserRouter } from "react-router-dom"
import PhoneCard from "../../components/Category/PhoneCard";
import Main from "../../Layout/Main"
import AddAPhone from "../../Pages/AddAPhone/AddAPhone";
import ALLBuyers from "../../Pages/ALLBuyers/ALLBuyers";
import Home from "../../Pages/Home/Home"
import LogIn from "../../Pages/LogIn/LogIn";
import MyProduct from "../../Pages/MyProduct/MyProduct";
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
                loader:({params})=>fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/category/${params.id}`)
            },
            
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/addAPhone',
                element:<AddAPhone></AddAPhone>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/allbuyers',
                element:<ALLBuyers></ALLBuyers>
            },
            {
                path:'/myproducts',
                element:<MyProduct></MyProduct>
            }
        ]
    }
])
export default router;
