import React, { useRef, useState, useEffect } from 'react';
import { Typography, Input, Button } from "../../../../components/ui";
import InputMask from 'react-input-mask';
import cx from './index.module.scss';
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { uid } from "react-uid";

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
        placeholder: 'дд.мм.гггг'
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
        placeholder: "Нижний Новгород",
      },
    ]
  },
];

export default function LKMain() {
  const formRef = useRef<HTMLFormElement>(null);

  // If you want a type meaning "empty object", you probably want `Record<string, never>` instead.
  const [formData, setFormData] = useState<IFields |Record<string, never>>({});

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
    <div className={cx.container}>
      <form ref={formRef} className={cx.form}>
        <Typography variant="h1">мои данные</Typography>

        <div className={cx.fields}>
          {fields.map((column) => (
            <div className={cx.subFields} key={uid(column)}>
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
                  : item.name === 'date'
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

          <RadioGroup
            row
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="женский" />
            <FormControlLabel value="male" control={<Radio />} label="мужской" />
            <FormControlLabel value="other" control={<Radio />} label="другой" />
          </RadioGroup>


        </div>



      </form>

      <Button onClick={onSendForm} className={cx.saveBtn}>Редактировать</Button>

    </div>
  )
}
