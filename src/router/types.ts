export enum ERoutes {
    Error = '*',
    Default = '/',
    CrmScheme = '/crm/scheme',
    CrmSchemesMain = '/crm/schemes',
    CrmBrandRegistration = '/crm/brandRegistration',
    CrmProduct = '/crm/product',
    CrmStock = '/crm/stock',
    Product = '/product',
    LK = '/lk',
}

export enum ESocials {
    Default = '/',
}

export enum ERoles {
    brand = 'brand', // владельца бренда в CRM
    seller = 'seller', // владельца бренда в маркетплейсе
    customer = 'customer', // покупателя
}
