import React, { useContext } from 'react'
import { Input, Button, EBtnColor } from "../../../../components/ui";
import { uid } from "react-uid";
import { ReactComponent as GoogleSvg } from '../../../../../static/images/icons/google.svg';
import { ReactComponent as AppleSvg } from '../../../../../static/images/icons/apple.svg';
import { AuthContext } from "../..";
import { EType } from "../types";
import cx from './index.module.scss';


interface IProps {
  type?: EType,
}

interface IItem {
  label: string,
  name: string,
  placeholder: string,
  type?: string,
}

const loginFields = [
  {
    label: "элекронная почта",
    name: "email",
    placeholder: "reup@reup.ru",
    type: "password",
  },
  {
    label: "пароль",
    name: "password",
    placeholder: "пароль",
  },
];

const regFields = [
  {
    label: "фамилия",
    name: "surname",
    placeholder: "фамилия*",
  },
  {
    label: "имя",
    name: "name",
    placeholder: "Никита",
  },
  {
    label: "элекронная почта",
    name: "email",
    placeholder: "reup@reup.ru",
  },
  {
    label: "номер телефона",
    name: "phone",
    placeholder: "+7 900 000 000",
  },
  {
    label: "пароль",
    name: "password",
    placeholder: "пароль",
  },
];

export default function FirstScreen({ type = EType.LOGIN }: IProps) {
  const fields = type === "login" ? loginFields : regFields;

  const authContextValue = useContext(AuthContext);

  return (
    <div className={cx.wrapper}>
      {
        fields.map((item: IItem, idx) => {
          return (
            <div className={cx.input} key={uid(idx)}>
              <p className={cx.label}>{item.label}</p>
              <Input
                key={item.name}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type || 'text'}
                className={cx.field}
              />
            </div>)
        })
      }
      {
        type === EType.LOGIN && (
          <>
            {/* Кнопку делаем неактивной, пока поля не бдут заполнены */}
            <Button onClick={() => authContextValue?.onNextLoginPart(2)}>Войти </Button>
            <Button colorM={EBtnColor.NOTE} onClick={authContextValue?.onNextLoginPart as () => void}>войти по номеру телефонa</Button>
            <div className={cx.fBtns}>
              <GoogleSvg />
              <AppleSvg />
            </div>
            <p className={cx.note}>еще не зарегистрированы?</p>
            {/* TODO: открываем попап регистрации */}
            <button className={cx.send}><p>зарегистрироваться</p></button>
          </>
        )
      }

      {
        type === EType.REG && (
          <>
            <div>confirm checkbox</div>
            <div>мы отправим вам код в sms</div>
          </>
        )
      }


    </div>
  )
}
