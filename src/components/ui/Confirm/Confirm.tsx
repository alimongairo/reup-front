import { ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import close from '../../../../static/images/icons/close.svg';

import Button from '../Button';
import { Modal } from '@mui/material';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

const Confirm = ({ visible, onClose, onSubmit, children }: IProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible]);

  return (
    <Modal open={visible}>
      <div className={cx.backModal}>
        <div className={classNames(cx.wrapper)}>
          <span className={cx.closeBtn} onClick={onClose}>
            <img src={close} alt={'close'} />
          </span>
          <div className={cx.content}>
            {children}
            <div className={cx.btns}>
              <Button onClick={onSubmit}>да</Button>
              <Button onClick={onClose}>отмена</Button>
            </div>
          </div>
        </div>
        <span className={cx.closeMask} onClick={onClose}></span>
      </div>
    </Modal>
  );
};

export default Confirm;