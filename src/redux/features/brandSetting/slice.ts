import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    TCategory,
    TColorAndFamily,
    TEditText,
    TSchemeData,
} from '../../../components/Brand/components/Menu/models.ts';
import {
    IScheme1Brand,
    IScheme2Brand,
    IScheme3Brand,
} from '../../../types/brandTypes.ts';
import { TParsedStyle } from '@/helpers';

const initialState: TSchemeData = {
    editText: [],
    bgColor: [],
    categories: {
        allCategories: [],
        value: [],
    },
    colorAndFamily: [],
    images: [],
};

const brandSettingSlice = createSlice({
    name: 'brandSettingAlias',
    initialState, // тут брать инфо из приходящих данных
    reducers: {
        setBaseData(
            state,
            action: PayloadAction<{
                data: any;
                schemeId: number;
            }>
        ) {
            const { data, schemeId } = action.payload as unknown as {
                data: any;
                schemeId: number;
            };

            if (data) {
                let editTextData = [] as TEditText[];
                let colorAndFamilyData = [] as TColorAndFamily[];
                switch (schemeId) {
                    case 0: {
                        editTextData = [
                            {
                                name: 'name',
                                title: 'Название',
                                value: (data as IScheme1Brand).name,
                            },
                            {
                                name: 'about',
                                title: 'О нас',
                                value: (data as IScheme1Brand).about,
                            },
                            {
                                name: 'description_2page',
                                title: '2 страница слайдера',
                                value: (data as IScheme1Brand)
                                    .description_2page,
                            },
                            {
                                name: 'heading',
                                title: 'Заголовок 1',
                                value: (data as IScheme1Brand).heading,
                            },
                            {
                                name: 'text1_block',
                                title: 'Текстовый блок 1',
                                value: (data as IScheme1Brand).text1_block,
                            },
                            {
                                name: 'heading2',
                                title: 'Заголовок 2',
                                value: (data as IScheme1Brand).heading2,
                            },
                            {
                                name: 'text2_block',
                                title: 'Текстовый блок 2',
                                value: (data as IScheme1Brand).text2_block,
                            },
                            {
                                name: 'text2',
                                title: 'Текст 2',
                                value: (data as IScheme1Brand).text2,
                            },
                        ];
                        colorAndFamilyData = [
                            {
                                title: 'Название',
                                name: 'name_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .name_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .name_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .name_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'О нас',
                                name: 'about_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .about_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .about_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .about_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: '2 страница слайдера',
                                name: 'description_2page_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .description_2page_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .description_2page_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .description_2page_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Заголовок 1',
                                name: 'heading1_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .heading1_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .heading1_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .heading1_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 1',
                                name: 'text1_block_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .text1_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .text1_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .text1_block_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Заголовок 2',
                                name: 'heading2_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .heading2_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .heading2_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .heading2_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 2',
                                name: 'text2_block_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .text2_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .text2_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .text2_block_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текст 2',
                                name: 'text2_param',
                                family:
                                    (
                                        (data as IScheme1Brand)
                                            .text2_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme1Brand)
                                            .text2_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme1Brand)
                                            .text2_param as TParsedStyle
                                    ).color || null,
                            },
                        ];
                        break;
                    }
                    case 1: {
                        editTextData = [
                            {
                                name: 'heading1',
                                title: 'Заголовок 1',
                                value: (data as IScheme2Brand).heading1,
                            },
                            {
                                name: 'text1_block',
                                title: 'Текстовый блок 1',
                                value: (data as IScheme2Brand).text1_block,
                            },
                            {
                                name: 'heading2',
                                title: 'Заголовок 2',
                                value: (data as IScheme2Brand).heading2,
                            },
                            {
                                name: 'text2_block',
                                title: 'Текстовый блок 2',
                                value: (data as IScheme2Brand).text2_block,
                            },
                            {
                                name: 'text',
                                title: 'Текст',
                                value: (data as IScheme2Brand).text,
                            },
                            {
                                name: 'heading3',
                                title: 'Заголовок 3',
                                value: (data as IScheme2Brand).heading3,
                            },
                            {
                                name: 'text3_block',
                                title: 'Текстовый блок 3',
                                value: (data as IScheme2Brand).text3_block,
                            },
                        ];
                        colorAndFamilyData = [
                            {
                                title: 'Заголовок 1',
                                name: 'heading1_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .heading1_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .heading1_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .heading1_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 1',
                                name: 'text1_block_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .text1_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .text1_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .text1_block_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Заголовок 2',
                                name: 'heading2_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .heading2_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .heading2_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .heading2_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 2',
                                name: 'text2_block_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .text2_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .text2_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .text2_block_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текст',
                                name: 'text_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .text_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .text_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .text_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Заголовок 3',
                                name: 'heading3_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .heading3_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .heading3_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .heading3_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 3',
                                name: 'text3_block_param',
                                family:
                                    (
                                        (data as IScheme2Brand)
                                            .text3_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme2Brand)
                                            .text3_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme2Brand)
                                            .text3_block_param as TParsedStyle
                                    ).color || null,
                            },
                        ];
                        break;
                    }
                    case 2: {
                        editTextData = [
                            {
                                name: 'heading1',
                                title: 'Заголовок 1',
                                value: (data as IScheme3Brand).heading1,
                            },
                            {
                                name: 'text1_block',
                                title: 'Текстовый блок 1',
                                value: (data as IScheme3Brand).text1_block,
                            },
                            {
                                name: 'heading2',
                                title: 'Заголовок 2',
                                value: (data as IScheme3Brand).heading2,
                            },
                            {
                                name: 'text2_block',
                                title: 'Текстовый блок 2',
                                value: (data as IScheme3Brand).text2_block,
                            },
                            {
                                name: 'heading3',
                                title: 'Заголовок 3',
                                value: (data as IScheme3Brand).heading3,
                            },
                        ];
                        colorAndFamilyData = [
                            {
                                title: 'Заголовок 1',
                                name: 'heading1_param',
                                family:
                                    (
                                        (data as IScheme3Brand)
                                            .heading1_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme3Brand)
                                            .heading1_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme3Brand)
                                            .heading1_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 1',
                                name: 'text1_block_param',
                                family:
                                    (
                                        (data as IScheme3Brand)
                                            .text1_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme3Brand)
                                            .text1_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme3Brand)
                                            .text1_block_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Заголовок 2',
                                name: 'heading3_param',
                                family:
                                    (
                                        (data as IScheme3Brand)
                                            .heading3_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme3Brand)
                                            .heading3_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme3Brand)
                                            .heading3_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Текстовый блок 2',
                                name: 'heading2_param',
                                family:
                                    (
                                        (data as IScheme3Brand)
                                            .heading2_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme3Brand)
                                            .heading2_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme3Brand)
                                            .heading2_param as TParsedStyle
                                    ).color || null,
                            },
                            {
                                title: 'Заголовок 3',
                                name: 'text2_block_param',
                                family:
                                    (
                                        (data as IScheme3Brand)
                                            .text2_block_param as TParsedStyle
                                    ).fontFamily || null,
                                size:
                                    (
                                        (data as IScheme3Brand)
                                            .text2_block_param as TParsedStyle
                                    ).fontSize || null,
                                color:
                                    (
                                        (data as IScheme3Brand)
                                            .text2_block_param as TParsedStyle
                                    ).color || null,
                            },
                        ];
                        break;
                    }

                    default:
                        [];
                }

                const bgColorData = [
                    {
                        name: 'background_color',
                        title: 'Цвет фона',
                        value: data.background_color,
                    },
                ];

                return {
                    ...state,
                    editText: editTextData,
                    bgColor: bgColorData,
                    colorAndFamily: colorAndFamilyData,
                };
            }
        },

        setBrandSettingsByField(
            state,
            action: PayloadAction<{
                field: keyof TSchemeData;
                newData: TSchemeData[keyof TSchemeData];
            }>
        ) {
            if (action.payload.field === 'images') {
                const idx = state.images.findIndex(
                    (item: any) =>
                        Object.keys(item)[0] ===
                        Object.keys(action.payload.newData)[0]
                );

                if (idx !== -1) {
                    const acc = [...state.images];
                    acc[idx] = action.payload.newData;

                    return {
                        ...state,
                        images: acc,
                    };
                } else {
                    return {
                        ...state,
                        images: [...state.images, action.payload.newData],
                    };
                }
            } else {
                return {
                    ...state,
                    [action.payload.field]: action.payload.newData,
                };
            }
        },

        addCategory(state, action: PayloadAction<TCategory>) {
            const currentCategoriesMap = new Map(
                [...state.categories.value, action.payload].map((category) => [
                    category.name,
                    category,
                ])
            );
            return {
                ...state,
                categories: {
                    ...state.categories,
                    value: [...currentCategoriesMap.values()],
                },
            };
        },
        removeCategory(state, action: PayloadAction<TCategory>) {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    value: state.categories.value.filter(
                        (category) => category.name !== action.payload.name
                    ),
                },
            };
        },
    },
});

export default brandSettingSlice.reducer;
export const {
    setBaseData,
    setBrandSettingsByField,
    addCategory,
    removeCategory,
} = brandSettingSlice.actions;
