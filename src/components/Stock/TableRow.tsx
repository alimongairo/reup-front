import { useState } from 'react';
//@ts-ignore
import img from 'S#/images/tmp.png';
import editIcon from 'S#/images/icons/edit.svg';
import deleteIcon from 'S#/images/icons/delete.svg';
import downArrow from 'S#/images/icons/downArrowSmall.svg';
import upArrow from 'S#/images/icons/upArrowSmall.svg';
import { Button, PopUp } from '@/components/ui';
import cx from './index.module.scss';

export interface StockItem {
    img: string | null;
    name: string;
    article: string;
    amount: number;
    detailedAmount: number[] | null;
    visibility: boolean;
}

const sizes = ['xl', 'l', 'm', 's', 'xs'];

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
                        <img src={img} alt="img" />
                    </div>
                </td>
                <td>
                    <div className={cx.name}>
                        {item.name}
                        <div
                            className={cx.detailsIcon}
                            onClick={() => setShowDetails(!showDetails)}
                            onKeyDown={() => setShowDetails(!showDetails)}
                            role="button"
                            tabIndex={0}
                        >
                            <img
                                src={showDetails ? upArrow : downArrow}
                                alt="details"
                            />
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
                        <img
                            src={editIcon}
                            alt="edit"
                            onClick={() => {}}
                            onKeyDown={() => {}}
                            role="presentation"
                        />
                        <img
                            src={deleteIcon}
                            alt="delete"
                            onClick={() => setOpen(true)}
                            onKeyDown={() => setOpen(true)}
                            role="presentation"
                        />
                    </div>
                </td>
            </tr>

            {showDetails && (
                <tr className={cx.detailsRow}>
                    <td></td>
                    <td></td>
                    <td>
                        <div className={cx.sizes}>
                            {sizes.map((el, i) => (
                                <div className={cx.sizeItem} key={i}>
                                    {el}
                                </div>
                            ))}
                        </div>
                    </td>
                    <td>
                        <div className={cx.detailedAmount}>
                            {item.detailedAmount?.map((el, i) => (
                                <div className={cx.amountItem} key={i}>
                                    {el}
                                </div>
                            ))}
                        </div>
                    </td>
                    <td></td>
                </tr>
            )}

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
