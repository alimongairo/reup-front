import { Button as MuiButton, ButtonProps } from '@mui/material';
import cls from 'classnames';
import './index.scss';
import React from 'react';

interface IProps extends ButtonProps {
  viewType?: "default" | "iconBtn",
  colorM?: "white" | "black" | "",
  iconName?: string,
  isActive?: boolean,
}

const Button = ({ children, viewType = "default", colorM = "black", iconName, isActive = false, ...props }: IProps) => {
  const { variant = "outlined", size = "medium" } = props;

  return (
    <MuiButton {...props} className={cls(props.className, "button", colorM, {
      "icon": viewType === "iconBtn",
      [`icon-${iconName}`]: iconName,
      ["active"]: isActive,
    }, props.className)} variant={variant} size={size} >
      {children}
    </MuiButton>
  )
}

export default Button;
