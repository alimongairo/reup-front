import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage } from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])
