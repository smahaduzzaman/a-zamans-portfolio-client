import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About';
import Blog from '../../components/Blog';
import Contact from '../../components/Contact';
import Home from '../../components/Home';
import ProjectDetails from '../../components/ProjectDetails';
import Services from '../../components/Services';
import Skills from '../../components/Skills';
import Main from '../../Layouts/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/projectdetails",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/projectdetails/:id",
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => {
                    return fetch(`/creations.json`)
                        .then((response) => response.json())
                        .then((data) => data.find((item) => item.id === params.id))
                }
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;