export enum ERoutes {
  Error = '*',
  Default = '/',
  CrmScheme = '/crm/scheme',
  CrmSchemesMain = '/crm/schemes',
  CrmBrandRegistration = 'crm/brandRegistration',
  Stock = '/crm/stock',
  ProductEdit = '/crm/product'
}

export enum ESocials {
  Default = '/',
}

export enum ERoles {
  brand = 'brand',  // владельца бренда в CRM
  seller = 'seller',  // владельца бренда в маркетплейсе
  customer = 'customer',  // покупателя
}