import React from 'react';
import { ReactComponent as LogoIcon } from "../../../../static/images/icons/logo.svg";
import { ReactComponent as VkSvg } from "../../../../static/images/icons/socials/vk.svg";
import { ReactComponent as InstaSvg } from "../../../../static/images/icons/socials/insta.svg";
import { ReactComponent as FbSvg } from "../../../../static/images/icons/socials/fb.svg";
import { ReactComponent as TgSvg } from "../../../../static/images/icons/socials/tg.svg";
import { Link } from "react-router-dom";
import { ERoutes, ESocials } from "../../../app/router/types";
import { NavLink } from "..";
import cx from './index.module.scss';
import { uid } from "react-uid";

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
  },
];

// TODO: разные картинки, но выводится ко всем первая (???)
const socials = [
  {
    icon: <VkSvg />,
    link: ESocials.Default
  },
  {
    icon: <InstaSvg />,
    link: ESocials.Default
  },
  {
    icon: <FbSvg />,
    link: ESocials.Default
  },
  {
    icon: <TgSvg />,
    link: ESocials.Default
  },
];

export default function Footer() {
  return (
    <div className={cx.footer}>
      <Link to={ERoutes.Default} className={cx.logo}><LogoIcon /></Link>
      <ul className={cx.links}>
        {
          links.map((item, index) => {
            return (
              <li key={uid(index)}><NavLink to={item.link}>{item.title}</NavLink></li>
            )
          })
        }
      </ul>
      <ul className={cx.socials}>
        {
          socials.map((social, index) => {
            return (
              <li key={uid(index)}><Link to={social.link}>{social.icon}</Link></li>
              )
          })
        }

      </ul>
      <div></div>
      <div></div>
    </div>
  )
}
