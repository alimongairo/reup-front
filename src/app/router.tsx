import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, BrandPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/crm/brand/:schemeId",
        element: <BrandPage />
    },
    // {
    //     path: "/crm/brand",
    //     element: <разводящая стр />
    // },
    {
        path: "*",
        element: <ErrorPage />
    },
])
