import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/logIn/Login";
import SignUp from "../Components/SignUp/SignUp";
import SkillsDetails from "../Components/Home/SkillsDetails";


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
            path: '/skillsDetails',
            element: <SkillsDetails></SkillsDetails>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }

      ]
    },
  ]);
  
  export default router;