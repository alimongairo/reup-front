import { ReactNode, createContext, useState, useMemo } from 'react';
import { Button, Header, MobileToolbar } from "../../components/ui";
import cx from './index.module.scss';
import { ERoles } from '../../app/router/config';
import { AuthContext, AuthContextType } from "../../app/auth/authCotext";
import PopUp from "../../components/ui/PopUp";
import { Typography } from "@mui/material";

interface IProps { children: ReactNode }


export default function MainLayout({ children }: IProps) {
  return (
    <div className={cx.wrapper}>

      <Header type={ERoles.customer} />
      <div className={cx.container}>{children}</div>
      <MobileToolbar />
    </div>
  )
}
