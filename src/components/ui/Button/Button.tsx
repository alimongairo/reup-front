import React from 'react'
import { Button, ButtonProps } from '@mui/material';
import './index.scss';

interface IProps extends ButtonProps {
  viewType?: "default" | "iconBtn",
  colorM?: "white" | "black",
  iconName?: string,
}

const MyButton = ({ children, viewType = "default", colorM="black", iconName, ...props }: IProps) => {
  const { variant = "outlined", size = "medium" } = props;

  return (
    <Button {...props} className={`${props.className} button ${viewType === "iconBtn" && "icon"} ${colorM} ${iconName? `icon-${iconName}` : null}`} variant={variant} size={size} >
      {children}
    </Button>
  )
}

export default MyButton;
