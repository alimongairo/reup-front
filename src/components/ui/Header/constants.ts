/*
  0 - хедер владельца бренда в CRM
  1 - хедер владельца бренда в маркетплейсе
  2 - хедер покупателя
  */
  const types = [0, 1, 2]

  const CRMLinks = [
    {
      name: "страница бренда",
      link: "/",
    },
    {
      name: "склад",
      link: "/",
    },
    {
      name: "заказы",
      link: "/",
    },
    {
      name: "финансы",
      link: "/",
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
    console.log('--------- confReturner ----------');

    switch (type) {
        case 0:
            return type0Conf;
            break;
        case 1: 
            return type1Conf;
            break;
        case 2:
            return type2Conf;
            break;
        default:
            break;
    }
}

export {confReturner};
