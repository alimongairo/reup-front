import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, SchemePage, SchemeSelectionPage, StockPage, BrandRegistrationPage, ProductEditPage } from "@/pages";
import { ERoutes } from "./types";
import { AuthPopup } from "../app/auth/components";


export const router = createBrowserRouter([
    {
        path: ERoutes.Default,
        element: <AuthPopup><MainPage /></AuthPopup>
    },
    {
        path: `${ERoutes.CrmScheme}/:schemeId`,
        element: <AuthPopup><SchemePage /></AuthPopup>
    },
    {
        path: ERoutes.CrmSchemesMain,
        element: <AuthPopup><SchemeSelectionPage /></AuthPopup>
    },
    {
        path: ERoutes.CrmBrandRegistration,
        element: <AuthPopup><BrandRegistrationPage /></AuthPopup>
    },
    {
        path: ERoutes.Error,
        element: <AuthPopup><ErrorPage /></AuthPopup>
    },
    {
        path: ERoutes.Stock,
        element: <AuthPopup><StockPage /></AuthPopup>
    },
    {
        path: `${ERoutes.ProductEdit}/:id`,
        element: <ProductEditPage />
    },
])
