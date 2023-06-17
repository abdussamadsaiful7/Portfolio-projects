import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";
import Details from "../Components/Home/Details";
import About from "../Components/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/details',
            element: <Details></Details>
        },
        {
            path: '/about',
            element: <About></About>
        }

      ]
    },
  ]);
  
  export default router;