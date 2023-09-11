import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, SchemePage, SchemeSelectionPage } from "../../pages";
import { ERoutes } from "./types";
import BrandRegistrationPage from "../../pages/crm/BrandRegistrationPage";

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
        path: ERoutes.CrmBrandRegistration,
        element: <BrandRegistrationPage />
    },
    {
        path: ERoutes.Error,
        element: <ErrorPage />
    },
])
