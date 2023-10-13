import React, { useState } from 'react';
import cx from './index.module.scss';
import { Input } from "../../../../components/ui";
import InputMask, { Props } from 'react-input-mask';

export default function SecondScreen() {
  const [code, setCode] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }
  
  return (
    <div className={cx.wrapper}>
      <p>введите код, который мы отправили вам в sms</p>
      <InputMask
        mask='9 - 9 - 9 - 9'
        value={code}
        onChange={onChange}>
        {
          // @ts-ignore: https://blog.logrocket.com/implementing-react-input-mask-web-apps/
          (inputProps) => <Input {...inputProps} placeholder="1 - 2 - 3 - 4"/>
        }
      </InputMask>
      {/* TODO: обратный отсчет + замена текста */}
      <p>отправить повторно через 5 секунд</p>
      {/* TODO: дизейблить пока идет отсчет */}
      <button className={cx.send}><p>отправить код</p></button>
    </div>
  )
}
