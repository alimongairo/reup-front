import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, SchemePage, SchemeSelectionPage } from "../../pages";
import { ERoutes } from "./types";

export const router = createBrowserRouter([
    {
        path: ERoutes.Default,
        element: <MainPage />
    },
    {
        path: `${ERoutes.CrmScheme}/:schemeId`,
        element: <SchemePage />
    },
    {
        path: ERoutes.CrmSchemesMain,
        element: <SchemeSelectionPage />
    },
    {
        path: ERoutes.Error,
        element: <ErrorPage />
    },
])
