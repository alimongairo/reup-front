import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, EditPage, BrandPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/crm",
        element: <EditPage />
    },
    {
        path: "/crm",
        element: <EditPage />
    },
    // /crm/scheme/1
    {
        path: "/crm/brand/:schemeId",
        element: <BrandPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])
