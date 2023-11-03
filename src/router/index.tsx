import { createBrowserRouter } from 'react-router-dom';
import {
    ErrorPage,
    LKPage,
    MainPage,
    ProductPage,
    SchemePage,
    SchemeSelectionPage,
    StockPage,
    BrandRegistrationPage,
    ProductEditPage
} from '@/pages';
import { AuthPopup } from '../app/auth/components';
import { ERoutes } from "./types";


export const router = createBrowserRouter([
    {
        path: ERoutes.Default,
        element: (
            <AuthPopup>
                <MainPage />
            </AuthPopup>
        ),
    },
    {
        path: `${ERoutes.CrmScheme}/:schemeId`,
        element: (
            <AuthPopup>
                <SchemePage />
            </AuthPopup>
        ),
    },
    {
        path: ERoutes.CrmSchemesMain,
        element: (
            <AuthPopup>
                <SchemeSelectionPage />
            </AuthPopup>
        ),
    },
    {
        path: ERoutes.CrmBrandRegistration,
        element: (
            <AuthPopup>
                <BrandRegistrationPage />
            </AuthPopup>
        ),
    },
    {
        path: ERoutes.Error,
        element: (
            <AuthPopup>
                <ErrorPage />
            </AuthPopup>
        ),
    },
    {
        path: ERoutes.CrmStock,
        element: (
            <AuthPopup>
                <StockPage />
            </AuthPopup>
        ),
    },
    {
        path: `${ERoutes.CrmProduct}/:id`,
        element: <AuthPopup><ProductEditPage/></AuthPopup>
    },
    {
        path: `${ERoutes.Product}/:id`,
        element: (
            <AuthPopup>
                <ProductPage />
            </AuthPopup>
        ),
    },
    {
        path: `${ERoutes.LK}/:tabName?`,
        element: (
            <AuthPopup>
                <LKPage />
            </AuthPopup>
        ),
    },
]);
