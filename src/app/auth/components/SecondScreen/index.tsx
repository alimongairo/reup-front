import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui";
import InputMask from 'react-input-mask';
import cx from './index.module.scss';

export default function SecondScreen() {
  const [code, setCode] = useState('');
  const timeDelay = 5;
  const [time, setTime] = useState(timeDelay);
  let timerID: any;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }

  const tick = () => {
    console.log('tick')
    setTime((prev) => --prev)
  }

  const restartInterval = () => {
    timerID = setInterval(() => tick(), 1000);

  }

  useEffect(() => {
    restartInterval();
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerID);

    }
  }, [time])

  const onSendClick = () => {
    restartInterval();
    setTime(timeDelay);
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
          (inputProps) => <Input {...inputProps} placeholder="1 - 2 - 3 - 4" />
        }
      </InputMask>
      {
        time > 0 ? (<p>отправить повторно через {time} секунд</p>) : <button className={cx.send} disabled={time > 0} onClick={onSendClick}><p>отправить код</p></button>
      }
    </div>
  )
}
