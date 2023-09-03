import React from 'react'
import { Button, ButtonProps } from '@mui/material';
import './index.scss';

interface IProps extends ButtonProps {
  viewType?: "default" | "iconBtn",
  colorM?: "white" | "black",
}

const MyButton = ({ children, viewType = "default", colorM="black", ...props }: IProps) => {
  const { variant = "outlined", size = "medium" } = props;

  return (
    <Button {...props} className={`${props.className} button ${viewType === "iconBtn" && "icon"} ${colorM}`} variant={variant} size={size} >
      {children}
    </Button>
  )
}

export default MyButton;
