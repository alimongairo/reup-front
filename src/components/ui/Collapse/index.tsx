import { ReactNode, useEffect, useRef, useState } from 'react';

import {ReactComponent as MinusIcon} from '../../../../static/images/icons/minus.svg';
import cx from './index.module.scss';
import classNames from 'classnames';
import {Typography, Image} from '../../ui'

interface IProps {
  title: string;
  content: ReactNode;
  hideCollapseIcon?: boolean;
  moreText?: string;
  lessText?: string;
}

const Collapse = ({
  title,
  content,
  moreText,
  lessText,
  hideCollapseIcon,
}: IProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClose, setIsClose] = useState(true);
  const [heightContent, setHeightContent] = useState(0);

  const toggleOpen = () => {
    setIsClose((state) => !state);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isClose) {
        const height = contentRef.current.getBoundingClientRect().height;
        const minHeight = moreText || lessText ? '32px' : '0px';
        if (height !== 0) {
          setHeightContent(height);
        }
        contentRef.current.style.height = minHeight;
        return;
      }
      contentRef.current.style.height = `${heightContent}px`;
    }
  }, [isClose]);

  return (
    <div className={cx.wrapper}>
      {!hideCollapseIcon && (
        <div className={cx.collapseIcon} onClick={toggleOpen}>
          <MinusIcon className={cx.minus} />
          <MinusIcon className={classNames(cx.minus, { [cx.rotate]: isClose })} />
        </div>
      )}
      <Typography variant="h3" className={cx.title} onClick={toggleOpen}>
        {title}
      </Typography>

      <div className={cx.content} ref={contentRef}>
        {content}
      </div>
      {moreText && (
        <div>
          <p
            className={cx.moreText}
            onClick={toggleOpen}
          >
            {isClose ? moreText : lessText || moreText}
          </p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
