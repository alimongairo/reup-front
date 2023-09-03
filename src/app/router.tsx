import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, SchemePage, SchemeSelectionPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/crm/scheme/:schemeId",
        element: <SchemePage />
    },
    {
        path: "/crm/schemes",
        element: <SchemeSelectionPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])
