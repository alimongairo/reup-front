import { ChangeEvent, useContext, useState } from 'react';

import Container from '../../Container';
import { MenuContext } from "../../../helpers";
import { Input, Button } from "@/components/ui";
import { TCategory } from "../../../models";
// import { useAppDispatch, useAppSelector } from '@/hooks/store';
// import { brandSettingsCategoriesSelector } from '@/store/brandSetting/selectors';
// import { addCategory, removeCategory } from '@/store/brandSetting/slice';

import cx from './index.module.scss';




const Categories = () => {
  // const dispatch = useAppDispatch();
  const contextValue = useContext(MenuContext);

  // const { allCategories, value: currentCategories } = useAppSelector(
  //   brandSettingsCategoriesSelector,
  // );

  // TODO: mock ( на бэке не готовы категории )
  const currentCategories = [{
    title: "string",
    name: "string",
  }];

  // TODO: mock
  const allCategories = [{
    title: "string",
    name: "string",
  }];

  const [allCategoriesFiltered] =
    useState<TCategory[]>(allCategories);

  const onAddCategory = (category: TCategory) => {
    // dispatch(addCategory(category));
    console.log("onAddCategory", category)
  };

  const onRemoveCategory = (category: TCategory) => {
    // dispatch(removeCategory(category));
    console.log(onRemoveCategory, category)
  };

  const onSearch = (value: string) => {
    // if (!value) {
    //   setAllCategoriesFiltered(allCategories);
    //   return;
    // }

    // setAllCategoriesFiltered((state) =>
    //   state.filter((item) => item.title.includes(value)),
    // );
    console.log("onSearch", value)
  };

  return (
    <Container
      title={'добавить категории'}
      onBack={() => contextValue?.toHome()}
    >
      <p >
        Выберите 6-8 категорий Ваших товаров для блока Категории{' '}
      </p>
      <Input
        placeholder={'название категории'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
      />
      <div className={cx.searchResult}>
        {allCategoriesFiltered.map((item) => {
          return (
            <Button
              key={item.name}
              size={'small'}
              onClick={() => onAddCategory(item)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>

      <p>мой выбор</p>
      <div className={cx.myChoice}>
        {currentCategories.map((item) => {
          return (
            <Button
              key={item.name}
              size={'small'}
              isActive={true}
              onClick={() => onRemoveCategory(item)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
