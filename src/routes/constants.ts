import routes from "./config";

export enum Roles {
    brand = 'brand',  // владельца бренда в CRM
    seller = 'seller',  // владельца бренда в маркетплейсе
    customer = 'customer',  // покупателя
}

 
//   TODO: add correct links
  const CRMLinks = [
    {
      name: "страница бренда",
      link: routes.crm,
    },
    {
      name: "склад",
      link: routes.stock,
    },
    {
      name: "заказы",
      link: routes.main,
    },
    {
      name: "финансы",
      link: routes.main,
    },
];

const marketLinks = [
    {
        name: "локальные бренды",
        link: routes.main,
    },
    {
        name: " селективные винтажки",
        link: routes.main,
    },
    {
        name: "апсайкл",
        link: routes.main,
    },
    {
        name: "обувь",
        link: routes.main,
    },
    {
        name: "украшения",
        link: routes.main,
    },
    {
        name: "sale",
        link: routes.main,
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

function confReturner(type: Roles | null) {
    switch (type) {
        case Roles.brand:
            return brandConf;
        case Roles.seller: 
            return sellerConf;
        case Roles.customer:
            return customerConf;
        default:
            break;
    }
}

export {confReturner};
