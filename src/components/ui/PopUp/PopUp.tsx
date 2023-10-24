import { ReactNode, useEffect, useMemo } from 'react';
import cls from 'classnames';
import { ReactComponent as CloseSvg } from 'S#/images/icons/close.svg';
import { ReactComponent as BackSvg } from 'S#/images/icons/arrows/back.svg';
import { Dialog } from '@mui/material';
import cx from './index.module.scss';
import { Button } from "..";
import { strokeColorReturner } from "@/helpers";

interface IProps {
  visible: boolean;
  children: ReactNode;
  onClose?: () => void;
  onBackClick?: () => void;
  onSubmit?: () => void;
  type?: 'confirm' | 'alert' | 'custom';
  customButtons?: ReactNode;
  isCloseBtn?: boolean;
  isBordered?: boolean;
  isBackBtn?: boolean;
  // All other props
  [x: string]: any;
}

const PopUp = ({ visible, children, onClose, onSubmit, type, customButtons, isCloseBtn = true, isBordered = true, isBackBtn = false, onBackClick, ...props }: IProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible]);

  const buttons = useMemo(() => {
    if (type && customButtons) {
      return (
        <div className={cx.btns}>
          {customButtons}
        </div>
      );
    } else if (type === 'confirm') {
      return (
        <div className={cx.btns}>
          <Button onClick={onSubmit}>да</Button>
          <Button onClick={onClose}>отмена</Button>
        </div>
      );
    } else if (type === 'alert') {
      return (
        <div className={cx.btns}>
          <Button onClick={onClose}>ок</Button>
        </div>
      );
    } else {
      return null;
    }
  }, []);

  if (visible) {
    return (
      <Dialog open={visible} className={cls({[cx.fullscreen]: props.fullScreen} )} {...props}>
        <div className={cx.backModal}>
          <div className={cls(cx.wrapper, { [cx.bordered]: isBordered })}>
            {
              isCloseBtn && (
                <button className={cx.closeBtn} onClick={onClose}>
                  <CloseSvg stroke={strokeColorReturner(false)} />
                </button>
              )
            }

            {
              isBackBtn && (
                <button onClick={onBackClick} className={cx.backBtn}><BackSvg stroke={strokeColorReturner(false)} /></button>
              )
            }

            <div className={cx.content}>
              {children}
              {buttons}
            </div>
          </div>
          <span className={cx.closeMask} onClick={onClose}></span>
        </div>
      </Dialog>
    );
  }
};

export default PopUp;
