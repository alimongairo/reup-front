export enum ERoutes {
    Error = '*',
    Default = '/',
    CrmScheme = '/crm/scheme',
    CrmSchemesMain = '/crm/schemes',
    CrmBrandRegistration = '/crm/brandRegistration',
    Stock = '/crm/stock',
    Product = '/crm/product',
    LK = '/lk'
}

export enum ERoles {
    brand = 'brand',  // владельца бренда в CRM
    seller = 'seller',  // владельца бренда в маркетплейсе
    customer = 'customer',  // покупателя
}

 
//   TODO: add correct links
const CRMLinks = [
    {
      name: "страница бренда",
      link: ERoutes.Default,
    },
    {
      name: "склад",
      link: ERoutes.Stock,
    },
    {
      name: "заказы",
      link: ERoutes.Default,
    },
    {
      name: "финансы",
      link: ERoutes.Default,
    },
];

const marketLinks = [
    {
        name: "локальные бренды",
        link: ERoutes.Default,
    },
    {
        name: "селективные винтажки",
        link: ERoutes.Default,
    },
    {
        name: "апсайкл",
        link: ERoutes.Default,
    },
    {
        name: "обувь",
        link: ERoutes.Default,
    },
    {
        name: "украшения",
        link: ERoutes.Default,
    },
    {
        name: "sale",
        link: ERoutes.Default,
    },
];

const brandConf = {
    list: CRMLinks,
    isSearch: false,
    typeBtn: "CRM",
    isActions: false,
};

const sellerConf = {
    list: marketLinks,
    isSearch: true,
    typeBtn: "market",
    isActions: true,
};

const customerConf = {
    list: marketLinks,
    isSearch: true,
    typeBtn: false,
    isActions: true,
};

function confReturner(type: ERoles | null) {
    switch (type) {
        case ERoles.brand:
            return brandConf;
        case ERoles.seller: 
            return sellerConf;
        case ERoles.customer:
            return customerConf;
        default:
            break;
    }
}

export {confReturner};
