import React, {useRef} from 'react'
import { Typography, Input } from "../../../../components/ui"
import { Grid, Stack } from '@mui/material';


const fields = [
  [
    {
      label:
        'Наименование партнера (полное наименование юридического лица / ФИО физического лица, осуществляющего предпринимательскую деятельность / иное наименование,если применимо)*',
      name: 'companyName',
    },
    {
      label:
        'ФИО уполномоченного руководителя / наименование единоличногоисполнительного органа*',
      name: 'ownerName',
    },
    {
      label: 'Адрес интернет-сайта (при наличии)*',
      name: 'address',
    },
    {
      label:
        'Торговое / коммерческое наименование (это наименование будет видно всем покупателям)*',
      name: 'titleName',
    },
    {
      label: 'ФИО уполномоченного представителя*',
      name: 'representativeName',
    },
    {
      label: 'Фактический адрес*',
      name: 'addressActual ',
    },
  ],
  [
    {
      label: 'E-mail*',
      name: 'email',
    },
    {
      label: 'Телефон уполномоченного представителя*',
      name: 'phone',
    },
    {
      label: 'ИНН / регистрационный номер (если применимо)*',
      name: 'inn',
    },
    {
      label: 'КПП Наименование расчетного банка (если применимо)*',
      name: 'kpp',
    },
    {
      label: 'БИК расчетного банка / SWIFT code (если применимо)*',
      name: 'bik',
    },
    {
      label: 'Корреспондентский счет (если применимо)*',
      name: 'account',
    },
  ],
];

export default function LKMain() {
  const formRef = useRef<HTMLFormElement>(null);


  return (
    <div>
      <Typography variant="h1">мои данные</Typography>

      

    </div>
  )
}
