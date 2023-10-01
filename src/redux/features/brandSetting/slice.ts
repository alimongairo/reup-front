import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  EFamilies,
  TCategory,
  TSchemeData,
} from '../../../components/Brand/components/Menu/models.ts';
import { EColors } from "../../../components/ui";


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
  name: "brandSettingAlias",
  initialState, // тут брать инфо из приходящих данных
  reducers: {
    setBaseData(state,
      action: PayloadAction<{
        data: any;
        schemeId: number;
      }>) {

      const { data, schemeId } = action.payload as any;

      if (data) {
        // TODO: fx any
        let editTextData = [] as any;
        let colorAndFamilyData = [] as any;
        switch (schemeId) {
          case 0: {
            editTextData = [
              { name: "name", title: "Название", value: data.name },
              { name: "about", title: "О нас", value: data.about },
              { name: "description_2page", title: "2 страница слайдера", value: data.description_2page },
              { name: "heading", title: "Заголовок 1", value: data.heading },
              { name: "text1_block", title: "Текстовый блок 1", value: data.text1_block },
              { name: "heading2", title: "Заголовок 2", value: data.heading2 },
              { name: "text2_block", title: "Текстовый блок 2", value: data.text2_block },
              { name: "text2", title: "Текст 2", value: data.text2 },
            ];
            colorAndFamilyData = [
              {
                title: 'Название',
                name: 'name_param',
                family: data.name_param.fontFamily,
                size: data.name_param.fontSize,
                color: data.name_param.color,
              },
              {
                title: 'О нас',
                name: 'about_param',
                family: data.about_param.fontFamily,
                size: data.about_param.fontSize,
                color: data.about_param.color,
              },
              {
                title: '2 страница слайдера',
                name: 'description_2page_param',
                family: data.description_2page_param.fontFamily,
                size: data.description_2page_param.fontSize,
                color: data.description_2page_param.color,
              },
              {
                title: 'Заголовок 1',
                name: 'heading1_param',
                family: data.heading1_param.fontFamily,
                size: data.heading1_param.fontSize,
                color: data.heading1_param.color,
              },
              {
                title: 'Текстовый блок 1',
                name: 'text1_block_param',
                family: data.text1_block_param.fontFamily,
                size: data.text1_block_param.fontSize,
                color: data.text1_block_param.color,
              },
              {
                title: 'Заголовок 2',
                name: 'heading2_param',
                family: data.heading2_param.fontFamily,
                size: data.heading2_param.fontSize,
                color: data.heading2_param.color,
              },
              {
                title: 'Текстовый блок 2',
                name: 'text2_block_param',
                family: data.text2_block_param.fontFamily,
                size: data.text2_block_param.fontSize,
                color: data.text2_block_param.color,
              },
              {
                title: 'Текст 2',
                name: 'text2_param',
                family: data.text2_param.fontFamily,
                size: data.text2_param.fontSize,
                color: data.text2_param.color,
              },
            ];
            break;
          };
          case 1: {
            editTextData = [
              { name: "heading1", title: "Заголовок 1", value: data.heading1 },
              { name: "text1_block", title: "Текстовый блок 1", value: data.text1_block },
              { name: "heading2", title: "Заголовок 2", value: data.heading2 },
              { name: "text2_block", title: "Текстовый блок 2", value: data.text2_block },
              { name: "text", title: "Текст", value: data.text },
              { name: "heading3", title: "Заголовок 3", value: data.heading3 },
              { name: "text3_block", title: "Текстовый блок 3", value: data.text3_block },
            ];
            colorAndFamilyData = [
              {
                title: 'Заголовок 1',
                name: 'heading1_param',
                family: data.heading1_param.fontFamily,
                size: data.heading1_param.fontSize,
                color: data.heading1_param.color,
              },
              {
                title: 'Текстовый блок 1',
                name: 'text1_block_param',
                family: data.text1_block_param.fontFamily,
                size: data.text1_block_param.fontSize,
                color: data.text1_block_param.color,
              },
              {
                title: 'Заголовок 2',
                name: 'heading2_param',
                family: data.heading2_param.fontFamily,
                size: data.heading2_param.fontSize,
                color: data.heading2_param.color,
              },
              {
                title: 'Текстовый блок 2',
                name: 'text2_block_param',
                family: data.text2_block_param.fontFamily,
                size: data.text2_block_param.fontSize,
                color: data.text2_block_param.color,
              },
              {
                title: 'Текст',
                name: 'text_param',
                family: data.text_param.fontFamily,
                size: data.text_param.fontSize,
                color: data.text_param.color,
              },
              {
                title: 'Заголовок 3',
                name: 'heading3_param',
                family: data.heading3_param.fontFamily,
                size: data.heading3_param.fontSize,
                color: data.heading3_param.color,
              },
              {
                title: 'Текстовый блок 3',
                name: 'text3_block_param',
                family: data.text3_block_param.fontFamily,
                size: data.text3_block_param.fontSize,
                color: data.text3_block_param.color,
              },
            ];
            break;
          };
          case 2: {
            editTextData = [
              { name: "heading1", title: "Заголовок 1", value: data.heading1 },
              { name: "text1_block", title: "Текстовый блок 1", value: data.text1_block },
              { name: "heading2", title: "Заголовок 2", value: data.heading2 },
              { name: "text2_block", title: "Текстовый блок 2", value: data.text2_block },
              { name: "heading3", title: "Заголовок 3", value: data.heading3 },
            ];
            colorAndFamilyData = [
              {
                title: 'Заголовок 1',
                name: 'heading1_param',
                family: data.heading1_param.fontFamily,
                size: data.heading1_param.fontSize,
                color: data.heading1_param.color,
              },
              {
                title: 'Текстовый блок 1',
                name: 'text1_block_param',
                family: data.text1_block_param.fontFamily,
                size: data.text1_block_param.fontSize,
                color: data.text1_block_param.color,
              },
              {
                title: 'Заголовок 2',
                name: 'heading3_param',
                family: data.heading3_param.fontFamily,
                size: data.heading3_param.fontSize,
                color: data.heading3_param.color,
              },
              {
                title: 'Текстовый блок 2',
                name: 'heading2_param',
                family: data.heading2_param.fontFamily,
                size: data.heading2_param.fontSize,
                color: data.heading2_param.color,
              },
              {
                title: 'Заголовок 3',
                name: 'text2_block_param',
                family: data.text2_block_param.fontFamily,
                size: data.text2_block_param.fontSize,
                color: data.text2_block_param.color,
              },
            ];
            break;
          };

          default: []
        };

        const bgColorData = [
          { name: "background_color", title: "Цвет фона", value: data.background_color },
        ];

        return {
          ...state,
          editText: editTextData,
          bgColor: bgColorData,
          colorAndFamily: colorAndFamilyData,
        }
      }

    },

    setBrandSettingsByField(
      state,
      action: PayloadAction<{
        field: keyof TSchemeData;
        newData: TSchemeData[keyof TSchemeData];
      }>,
    ) {
      if (action.payload.field === 'images') {

        const idx = state.images.findIndex(
          (item: any) =>
            Object.keys(item)[0] === Object.keys(action.payload.newData)[0]
        );

        if (idx !== -1) {
          const acc = [...state.images];
          acc[idx] = action.payload.newData;

          return {
            ...state,
            images: acc,
          }
        } else {
          return {
            ...state,
            images: [...state.images, action.payload.newData],
          }
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
        ]),
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
            (category) => category.name !== action.payload.name,
          ),
        },
      };
    },
  },
});

export default brandSettingSlice.reducer;
export const { setBaseData, setBrandSettingsByField, addCategory, removeCategory } =
  brandSettingSlice.actions;
