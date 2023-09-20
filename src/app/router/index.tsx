import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, ProductEditPage, SchemePage, SchemeSelectionPage, StockPage } from "../../pages";
import { ERoutes } from "./config";

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
    {
        path: ERoutes.Stock,
        element: <StockPage />
    },
    {
        path: `${ERoutes.ProductEdit}/:id`,
        element: <ProductEditPage />
    },
])
