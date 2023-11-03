import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps {
    direction: 'vertical' | 'horizontal';
    color?: 'default' | 'grey';
}

const Divider = ({ direction = 'vertical', color = 'default' }: IProps) => {
    return (
        <div className={classNames(cx.divider, cx[direction], cx[color])}></div>
    );
};

export default Divider;
