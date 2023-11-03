import { useState } from 'react';

import img from 'S#/images/tmp.png';
import { ReactComponent as EditIcon } from 'S#/images/icons/edit.svg';
import { ReactComponent as DeleteIcon } from 'S#/images/icons/delete.svg';
import { ReactComponent as DownArrow } from 'S#/images/icons/downArrowSmall.svg';
import { ReactComponent as UpArrow } from 'S#/images/icons/upArrowSmall.svg';
import { Button, PopUp } from '@/components/ui';
import cx from './index.module.scss';
import { Image } from '../ui';

export interface StockItem {
    img: string | null;
    name: string;
    article: string;
    amount: number;
    detailedAmount: number[] | null;
    visibility: boolean;
}

interface Props {
    item: StockItem;
}

const TableRow = ({ item }: Props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [open, setOpen] = useState(false);
    const [visibility, setVisibility] = useState(item.visibility);

    const soldOut = item.amount === 0;

  return (
    <>
      <tr className={`${cx.itemRow} ${showDetails && cx.noBorder}`}>
        <td>
          <div style={{ height: '100px' }}>
            <Image src={img}/>
          </div>
        </td>
        <td>
          <div className={cx.name}>
            {item.name}
            <div
              className={cx.detailsIcon}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? <UpArrow /> : <DownArrow />}
            </div>
          </div>
        </td>
        <td>
          <div>{item.article}</div>
        </td>
        <td>
          <div className={cx.amountBox}>{item.amount}</div>
        </td>
        <td>
          <div className={cx.actions}>
            {!soldOut ? (
              <Button onClick={() => setVisibility(!visibility)}>
                {visibility ? 'снять с витрины' : 'на витрину'}
              </Button>
            ) : (
              <Button onClick={() => {}} disabled>
                {'раскупили'}
              </Button>
            )}
            <EditIcon onClick={() => {}} />
            <DeleteIcon onClick={() => setOpen(true)} />
          </div>
        </td>
      </tr>

            <PopUp
                visible={open}
                onClose={() => setOpen(false)}
                onSubmit={() => {}}
                type="confirm"
            >
                <div>Вы действительно хотите удалить товар?</div>
                <div>&nbsp;</div>
                <div style={{ fontSize: '20px' }}>
                    Это означает, что товар будет удален с нашего маркетплейса,
                    но вы все еще будете обязаны выполнить доставку тем
                    покупателям, которые уже купили этот товар, но еще не
                    получили его.
                </div>
            </PopUp>
        </>
    );
};
export default TableRow;
