import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
])