import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, EditPage, BrandPage, StockPage } from "../pages";
import routes from "../routes/config";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage />
    },
    {
        path: routes.main,
        element: <MainPage />
    },
    {
        path: routes.crm,
        element: <EditPage />
    },
    {
        path: routes.brand(':schemeId'),
        element: <BrandPage />
    },
    {
        path: routes.stock,
        element: <StockPage />
    }
])
