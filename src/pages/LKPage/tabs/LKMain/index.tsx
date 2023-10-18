import React, { useRef, useState, useEffect } from 'react';
import { Typography, Input, Checkbox, Button } from "../../../../components/ui";
import InputMask from 'react-input-mask';
import cx from './index.module.scss';

interface IFields {
  name: string,
  placeholder: string,
  type?: string,
}

const fields = [
  {
    title: "личные данные",
    list: [
      {
        name: 'surname',
        placeholder: 'Фамилия'
      },
      {

        name: 'name',
        placeholder: 'Имя'
      },
      {
        name: 'lastName',
        placeholder: 'Отчество'
      },
      {
        name: 'date',
        type: 'date'
      },
    ]
  },
  {
    title: "контактные данные",
    list: [
      {
        name: 'email',
        placeholder: "reup@reup.ru",
        type: "email"
      },
      {
        name: "phone",
        placeholder: "+7 900 000 000",
        type: "tel"
      },
      {
        name: 'city',
      },
    ]
  },
];

export default function LKMain() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<IFields | {}>({});

  // TODO: когда сменяется таб, отправлять форму (контекст (?))
  const onSendForm = () => {
    if (formRef.current) {
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
    <>
      <form ref={formRef}>
        <Typography variant="h1">мои данные</Typography>

        <div className={cx.fields}>
          {fields.map((column) => (
            <div className={cx.subFields}>
              <Typography variant="h6">{column.title}</Typography>
              {column.list.map((item) => (
                item.type === 'tel'
                  ? <InputMask
                    mask='+9 (999) 999-99-99'
                    key={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type || 'text'}
                    className={cx.field}
                  >
                    {
                      // @ts-ignore: https://blog.logrocket.com/implementing-react-input-mask-web-apps/
                      (inputProps) => <Input {...inputProps} />
                    }
                  </InputMask>
                  : item.type === 'date'
                    ? <InputMask
                      mask='99.99.9999'
                      key={item.name}
                      name={item.name}
                      placeholder={item.placeholder}
                      type={item.type || 'text'}
                      className={cx.field}
                    >
                      {
                        // @ts-ignore: https://blog.logrocket.com/implementing-react-input-mask-web-apps/
                        (inputProps) => <Input {...inputProps} />
                      }
                    </InputMask>
                    : <Input
                      key={item.name}
                      name={item.name}
                      placeholder={item.placeholder}
                      type={item.type || 'text'}
                      className={cx.field}
                    />

              ))}
            </div>
          ))}
        </div>

        <div className={cx.gender}>
          <Typography variant="h6">пол</Typography>
          <div className={cx.list}>
            <div className={cx.checkbox}>
              <Checkbox name="female" />
              <p className={cx.note}>женский</p>
            </div>
            <div className={cx.checkbox}>
              <Checkbox name="male" />
              <p className={cx.note}>мужской</p>
            </div>
          </div>
        </div>



      </form>

      <Button onClick={onSendForm} className="as-mobile">Редактировать</Button>

    </>
  )
}
