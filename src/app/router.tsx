import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, CRMPage, CRMbrandPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/crm",
        element: <CRMPage />
    },
    {
        path: "/crm",
        element: <CRMPage />
    },
    // /crm/scheme/1
    {
        path: "/crm/brand/:schemeId",
        element: <CRMbrandPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])
