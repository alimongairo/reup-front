import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import cx from './index.module.scss';

import TableRow, { StockItem } from './TableRow';
import { Button, Input, Typography } from '../ui';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../../app/router/config';

const data: StockItem[] = [
  {
    img: null,
    name: 'Блузка женская 1',
    article: '0000000',
    amount: 1,
    detailedAmount: [0, 0, 0, 0, 1],
    visibility: true,
  },
  {
    img: null,
    name: 'Блузка женская 2',
    article: '0000000',
    amount: 123,
    detailedAmount: [0, 5, 0, 0, 2],
    visibility: false,
  },
  {
    img: null,
    name: 'Блузка женская 13',
    article: '0000000',
    amount: 0,
    detailedAmount: [0, 0, 0, 0, 0],
    visibility: false,
  },
];

const StockLayout = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleClickAdd = useCallback(() => {
    navigate(`${ERoutes.ProductEdit}/new`);
  }, []);

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearch(e.target.value);
    }, []);

  const items = data.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase()),
  );

  const tableHeader = useMemo(() => {
    return (
      <tr className={cx.tableHeader}>
        <td className={cx.fst}>фото</td>
        <td className={cx.snd}>наименование товара</td>
        <td className={cx.trd}>артикул</td>
        <td className={cx.fth}>количество</td>
        <td className={cx.fith}>видимость</td>
      </tr>
    );
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <Typography variant="h1" className={cx.headerLabel}>склад</Typography>
        <div className={cx.headerActions}>
          <Input value={search} onChange={handleSearch} search/>
          <Button size="small" onClick={handleClickAdd}>+ добавить товар</Button>
        </div>
      </div>
      <table>
        {tableHeader}
        {items.map((el, i) => (
          <TableRow key={i} item={el} />
        ))}
      </table>
    </div>
  );
};

export default StockLayout;