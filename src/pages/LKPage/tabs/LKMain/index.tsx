import React, { useRef, useState } from 'react'
import { Typography, Input } from "../../../../components/ui"
import cx from './index.module.scss';

interface IFields {

}
const fields = [
  [
    {
      name: 'surname',
    },
    {

      name: 'name',
    },
    {
      name: 'lastName',
    },
    {
      name: 'date',
    },
  ],
  [
    {
      name: 'email',
    },
    {
      name: 'phone',
    },
    {
      name: 'city',
    },
  ],
];

export default function LKMain() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<IFields | {}>({});

  return (
    <div>
      <Typography variant="h1">мои данные</Typography>



    </div>
  )
}
