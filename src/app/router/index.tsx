import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, LKPage, MainPage, SchemePage, SchemeSelectionPage, StockPage } from "../../pages";
import { ERoutes } from "./config";
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
    {
        path: ERoutes.Stock,
        element: <StockPage />
    },
    {
        path: `${ERoutes.Product}/:id`,
        element: <></>
    },
    {
        path: `${ERoutes.LK}/:tabName`,
        element: <LKPage />
    },
])
