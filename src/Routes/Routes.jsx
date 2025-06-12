import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FetchData from "../pages/Fetch/FetchData";
import FetchBooks from "../pages/FetchBooks/FetchBooks";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/fetch',
                element: <FetchData></FetchData>
            },
            {
                path: '/fetchbooks',
                element: <FetchBooks/>,
                loader:()=> fetch('https://ipit-books-backend-project.onrender.com/allbooks'),
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            }
        ]
    }

])