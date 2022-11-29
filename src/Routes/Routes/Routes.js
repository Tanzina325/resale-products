import { createBrowserRouter } from "react-router-dom"
import PhoneCard from "../../components/Category/PhoneCard";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import AddAPhone from "../../Pages/AddAPhone/AddAPhone";
import ALLBuyers from "../../Pages/ALLBuyers/ALLBuyers";
import AllSeller from "../../Pages/AllSeller/AllSeller";
import Home from "../../Pages/Home/Home"
import LogIn from "../../Pages/LogIn/LogIn";
import MyOrder from "../../Pages/MyOrder/MyOrder";
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
                path:'/register',
                element:<SignUp></SignUp>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/addaphone',
                element:<AddAPhone></AddAPhone>
            },
            {
                path:'/dashboard/allbuyers',
                element:<ALLBuyers></ALLBuyers>
            },
            {
                path:'/dashboard/allsellers',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/dashboard/myorders',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProduct></MyProduct>
            }
        ]
    }
])
export default router;
