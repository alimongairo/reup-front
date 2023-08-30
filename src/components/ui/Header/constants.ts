/*
  0 - хедер владельца бренда в CRM
  1 - хедер владельца бренда в маркетплейсе
  2 - хедер покупателя
  */
 
//   TODO: add correct links
  const CRMLinks = [
    {
      name: "страница бренда",
      link: "/crm",
    },
    {
      name: "склад",
      link: "/crm",
    },
    {
      name: "заказы",
      link: "/crm",
    },
    {
      name: "финансы",
      link: "/crm",
    },
];

const marketLinks = [
    {
        name: "локальные бренды",
        link: "/",
    },
    {
        name: " селективные винтажки",
        link: "/",
    },
    {
        name: "апсайкл",
        link: "/",
    },
    {
        name: "обувь",
        link: "/",
    },
    {
        name: "украшения",
        link: "/",
    },
    {
        name: "sale",
        link: "/",
    },
];

const type0Conf = {
    list: CRMLinks,
    isSearch: false,
    typeBtn: "CRM",
    isActions: false,
};

const type1Conf = {
    list: marketLinks,
    isSearch: true,
    typeBtn: "market",
    isActions: true,
};

const type2Conf = {
    list: marketLinks,
    isSearch: true,
    typeBtn: false,
    isActions: true,
};

function confReturner(type: number) {
    switch (type) {
        case 0:
            return type0Conf;
        case 1: 
            return type1Conf;
        case 2:
            return type2Conf;
        default:
            break;
    }
}

export {confReturner};
