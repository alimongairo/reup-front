import React from 'react'
import { Button, ButtonProps } from '@mui/material';
import cls from 'classnames';
import './index.scss';

interface IProps extends ButtonProps {
  viewType?: "default" | "iconBtn",
  colorM?: "white" | "black" | "",
  iconName?: string,
  isActive?: boolean,
}

const MyButton = ({ children, viewType = "default", colorM = "", iconName, isActive = false, ...props }: IProps) => {
  const { variant = "outlined", size = "medium" } = props;

  return (
    <Button {...props} className={cls(props.className, "button", colorM, {
      "icon": viewType === "iconBtn",
      [`icon-${iconName}`]: iconName,
      ["active"]: isActive,
    })} variant={variant} size={size} >
      {children}
    </Button>
  )
}

export default MyButton;
