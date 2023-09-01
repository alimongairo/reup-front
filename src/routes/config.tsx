const routes = {
    main: '/',
    crm: '/crm',
    brand: (schemeId: string | number) => `/customers/${schemeId}`,
    stock: '/crm/stock',
}

export default routes;