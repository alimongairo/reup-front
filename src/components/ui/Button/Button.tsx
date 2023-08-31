import React from 'react'
import { Button, ButtonProps } from '@mui/material';
import './index.scss';

const MyButton = ({children, ...props}: ButtonProps) => {
  const {variant = "outlined", size="medium"} = props;

  return (
    <Button {...props} className="button" variant={variant} size={size} >
      {children}
    </Button>
  )
}

export default MyButton;
