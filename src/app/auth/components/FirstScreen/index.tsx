import React, { useContext, useEffect, useRef, useState } from 'react'
import { Input, Button, EBtnColor } from "../../../../components/ui";
import { uid } from "react-uid";
import { ReactComponent as GoogleSvg } from '../../../../../static/images/icons/google.svg';
import { ReactComponent as AppleSvg } from '../../../../../static/images/icons/apple.svg';
import { AuthContext } from "../..";
import { EType } from "../types";
import cx from './index.module.scss';
import { EPopupType } from "../AuthPopup";
import InputMask from 'react-input-mask';

interface IProps {
  type?: EType,
}

interface IItem {
  label: string,
  name: string,
  placeholder: string,
  type?: string,
}

interface ILoginFormFields {
  email: string,
  password: string,
};

interface IRegFormfields {
  surname: string,
  name: string,
  email: string,
  tel: string,
  password: string,
}

const loginFields = [
  {
    label: "элекронная почта",
    name: "email",
    placeholder: "reup@reup.ru",
    type: "email"
  },
  {
    label: "пароль",
    name: "password",
    placeholder: "пароль",
    type: "password"
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
    type: "email"
  },
  {
    label: "номер телефона",
    name: "phone",
    placeholder: "+7 900 000 000",
    type: "tel"
  },
  {
    label: "пароль",
    name: "password",
    placeholder: "пароль",
    type: "password"
  },
];

export default function FirstScreen({ type = EType.LOGIN }: IProps) {
  const fields = type === "login" ? loginFields : regFields;

  const authContextValue = useContext(AuthContext);

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<
    ILoginFormFields | IRegFormfields | {}
  >({});

  const onSendForm = () => {
    console.log('onSendForm')
    if (formRef.current) {
      console.log('dsdsd')
      authContextValue?.onNextPart();
      const data = new FormData(formRef.current);
      setFormData((state: any) => ({
        ...state,
        ...Object.fromEntries([...data]),
      }));
      // после отправки нужно будет чистить setFormData({})
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form className={cx.wrapper} ref={formRef}>
      {
        fields.map((item: IItem, idx) => {
          return (
            <div className={cx.input} key={uid(idx)}>
              <p className={cx.label}>{item.label}</p>
              {
                item.type === 'tel' ?
                  <InputMask
                    mask='+9 (999) 999-99-99'
>
                    {
                      // @ts-ignore: https://blog.logrocket.com/implementing-react-input-mask-web-apps/
                      (inputProps) => <Input {...inputProps} />
                    }
                  </InputMask> : <Input
                    key={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type || 'text'}
                    className={cx.field}
                  />
              }

            </div>)
        })
      }
      {
        type === EType.LOGIN && (
          <>
            {/* Кнопку делаем неактивной, пока поля не бдут заполнены */}
            <Button onClick={onSendForm}>Войти </Button>
            <Button colorM={EBtnColor.NOTE} onClick={authContextValue?.onNextPart as () => void}>войти по номеру телефонa</Button>
            <div className={cx.fBtns}>
              <GoogleSvg />
              <AppleSvg />
            </div>
            <p className={cx.note}>еще не зарегистрированы?</p>
            <button className={cx.send} onClick={() => authContextValue?.onPopupTypeChange(EPopupType.REG)}><p>зарегистрироваться</p></button>
          </>
        )
      }

      {
        type === EType.REG && (
          <>
            <div>confirm checkbox</div>
            <p className={cx.note}>мы отправим вам код в sms</p>
            <Button onClick={onSendForm}>отправить код</Button>
            <div className={cx.fBtns}>
              <GoogleSvg />
              <AppleSvg />
            </div>
            <p className={cx.note}>уже зарегистрированы?</p>
            <button className={cx.send} onClick={() => authContextValue?.onPopupTypeChange(EPopupType.LOGIN)}><p>войти</p></button>
          </>
        )
      }


    </form>
  )
}
