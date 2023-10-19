import React from 'react';
import cx from './index.module.scss';
import { Button, Typography } from "../../../../components/ui";
import { ProductSlider } from "../../../MainPage/components";
import { Link } from "react-router-dom";

export default function LKFav() {
  const mockData  = Array(0).fill(null) 

  // TODO: сделать не слайдеры, а грид сетку
  return (
    <div className={cx.container}>
      <div className={cx.fav}>
      <Typography variant="h1">избранное</Typography>
      {
        mockData.length > 0 
        ? (<ProductSlider list={mockData}/>)
        : (<>
        
        <Typography variant="h6">кажется, вам пока ничего не понравилось</Typography>
        
        <Button component={Link}>отправиться на поиски</Button>
        </>
        )
      }
      </div>
      <div className={cx.relevant}>
      <Typography variant="h1">вам может понравиться</Typography>
      <ProductSlider />
      </div>
    </div>
  )
}
