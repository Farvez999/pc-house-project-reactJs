import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import CategoryDetails from "../Pages/Home/Categories/CategoryDetails"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: "/categories/:id",
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/categories/${params.id}`
                    ),
            },
        ],
    },
])

export default router
