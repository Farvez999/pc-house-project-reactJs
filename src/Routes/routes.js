import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../Layout/DashBoardLayout"
import Main from "../Layout/Main"
import AllUsers from "../Pages/Dashboard/AllUsers"
import MyProducts from "../Pages/Dashboard/MyProducts"
import CategoryDetails from "../Pages/Home/Categories/CategoryDetails"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
import Blog from "../Pages/Other/Blog"
import ErrorPage from "../Pages/Other/ErrorPage/ErrorPage"
import PrivateRoutes from "./PrivateRoutes"

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
                path: '/blog',
                element: <Blog />,
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
                path: "/categorie/:id",
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/categorie/${params.id}`
                    ),
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-rose.vercel.app/bookings/${params.id}`)
            // },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
])

export default router
