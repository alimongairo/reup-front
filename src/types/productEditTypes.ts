export interface Product {
    type: string;
    category: string;
    subcategory: string;
    subsubcategory: string;
    name: string;
    description: string;
    media: {
        main: any;
        other: any[];
    };
    fabric: string[];
    color: string[];
    pattern: string[];
    style: string[];
    season: string;
    gender: string;
    characterictics: {
        text: string;
        // images: any[];
    };
    sizeCountry: string;
    sizeType: SizeType;
    sizes: string[][] | string[];
    poi: string;
    weight: string;
    price: string;
    discount: string;
}

export enum SizeType {
    none = '',
    single = 'single',
    range = 'range',
}

export const initState: Product = {
    type: '',
    category: '',
    subcategory: '',
    subsubcategory: '',
    name: '',
    description: '',
    media: {
      main: null,
      other: [null, null, null, null, null, null, null, null],
    },
    fabric: [],
    color: [],
    pattern: [],
    style: [],
    season: '',
    gender: '',
    characterictics: {
      text: '',
    },
    sizeCountry: '',
    sizeType: SizeType.none,
    sizes: [],
    poi: '',
    weight: '',
    price: '',
    discount: '',
};