interface IBrandState {
    id: string;
    scheme_id: number;
}

interface Brand {
    id: string;
}

interface IScheme1Brand {
    vendor_id: number,
    name: string | null,
    name_param: string | null,
    about: string | null,
    about_param: string | null,
    description_2page: string | null,
    description_2page_param: string | null,
    heading: string | null,
    heading1_param: string | null,
    text1_block: string | null,
    text1_block_param: string | null,
    heading2: string | null,
    heading2_param: string | null,
    text2_block: string | null,
    text2_block_param: string | null,
    text2: string | null,
    text2_param: string | null,
    image1_main: string | null,
    image2_main: string | null,
    image_header1: string | null,
    image_header2: string | null,
    image_header3: string | null,
    background_color: string | null,
    categories_components_color: string | null,
    heading1_color: string | null,
}

interface IScheme2Brand {
    vendor_id: number,
    heading1: string | null,
    heading1_param: string | null,
    text1_block: string | null,
    text1_block_param: string | null,
    heading2: string | null,
    heading2_param: string | null,
    text2_block: string | null,
    text2_block_param: string | null,
    heading3: string | null,
    heading3_param: string | null,
    text3_block: string | null,
    text3_block_param: string | null,
    text: string | null,
    text_param: string | null,
    image1_main: string | null,
    image_logo: string | null,
    image3_left: string | null,
    image_header3: string | null,
    background_color: string | null,
    components_color: string | null,
    main_color: string | null,
    heading3_color: string | null,
}

interface IScheme3Brand {
    vendor_id: number,
    heading1: string | null,
    heading1_param: string | null,
    text1_block: string | null,
    text1_block_param: string | null,
    heading2: string | null,
    heading2_param: string | null,
    text2_block: string | null,
    text2_block_param: string | null,
    heading3: string | null,
    heading3_param: string | null,
    image_main: string | null,
    image1_left: string | null,
    image1_middle: string | null,
    image1_right: string | null,
    image2_left: string | null,
    image2_right: string | null,
    background_color: string | null,
    heading1_color: string | null,
    heading2_color: string | null,
    heading3_color: string | null,
    categories_color: string | null,
    components_color: string | null,
}

export type { IBrandState, Brand, IScheme1Brand, IScheme2Brand, IScheme3Brand }
