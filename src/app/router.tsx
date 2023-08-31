import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, CRMPage } from "../pages";

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
        path: "*",
        element: <ErrorPage />
    },
])
