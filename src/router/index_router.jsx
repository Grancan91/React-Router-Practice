import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";
import About from "../pages/About";
import DetailTodo from "../pages/DetailTodo/DetailTodo";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Welcome/>
            },
            {
                path: '/todo/:todoId',
                element: <DetailTodo/>
            },
            {
                path: '/about',
                element: <About/>
            },

        ]
    }
])


export default router