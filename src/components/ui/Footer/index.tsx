import React from 'react';
import { ReactComponent as LogoIcon } from "S#/images/icons/logo.svg";
import { ReactComponent as VkSvg } from "S#/images/icons/socials/vk.svg";
import { ReactComponent as InstaSvg } from "S#/images/icons/socials/insta.svg";
import { ReactComponent as FbSvg } from "S#/images/icons/socials/fb.svg";
import { ReactComponent as TgSvg } from "S#/images/icons/socials/tg.svg";
import { Link } from "react-router-dom";
import { ERoutes, ESocials } from "../../../router/types";
import { Button, NavLink } from "..";
import cx from './index.module.scss';
import { uid } from "react-uid";
import { strokeColorReturner } from "../../../helpers";

// TODO: actual links
const links = [
  {
    title: 'Написать в поддержку',
    link: ERoutes.Default
  },
  {
    title: 'FAQ',
    link: ERoutes.Default
  },
  {
    title: 'Публичная оферта',
    link: ERoutes.Default
  }, {
    title: 'Написать в поддержку',
    link: ERoutes.Default
  },
  {
    title: 'FAQ',
    link: ERoutes.Default
  },
  {
    title: 'Публичная оферта',
    link: ERoutes.Default
  },
];

const socialIconStyles = {
  fill: strokeColorReturner(false),
  width: 24,
  height: 24,
}

// TODO: разные картинки, но выводится ко всем первая (???)
const socials = [
  {
    icon: <VkSvg {...socialIconStyles}/>,
    link: ESocials.Default
  },
  {
    icon: <InstaSvg {...socialIconStyles}/>,
    link: ESocials.Default
  },
  {
    icon: <FbSvg {...socialIconStyles}/>,
    link: ESocials.Default
  },
  {
    icon: <TgSvg {...socialIconStyles}/>,
    link: ESocials.Default
  },
];

export default function Footer() {
  return (
    <div className={cx.footer}>
      <div className={cx.flex} >
      <Link to={ERoutes.Default} className={cx.logo}><LogoIcon /></Link>
      <ul className={cx.socials}>
        {
          socials.map((social, index) => {
            return (
              <li key={uid(index)} className={cx.socialIcon}><Link to={social.link}>{social.icon}</Link></li>
              )
          })
        }

      </ul>
      </div>
      <ul className={cx.links}>
        {
          links.map((item, index) => {
            return (
              <li key={uid(index)} className={cx.link}><NavLink to={item.link}>{item.title}</NavLink></li>
            )
          })
        }
      </ul>
      
      <Button>стать продавцом</Button>
    </div>
  )
}
