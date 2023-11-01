import { ReactNode, useEffect, useRef, useState } from 'react';

import { ReactComponent as MinusIcon } from 'S#/images/icons/minus.svg';
import cx from './index.module.scss';
import cls from 'classnames';

interface IProps {
  title: string | JSX.Element;
  content: ReactNode;
  hideCollapseIcon?: boolean;
  moreText?: string | JSX.Element;
  lessText?: string | JSX.Element;
  className?: string;
}

const Collapse = ({
  title,
  content,
  moreText,
  lessText,
  hideCollapseIcon,
  className,
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isClose]);

  return (
    <div className={cls(cx.wrapper, { [cx.active]: !isClose }, className)} >

      <div onClick={toggleOpen} className={cx.head} onKeyDown={toggleOpen} role="button" tabIndex={0}>
        {!hideCollapseIcon && (
          <div className={cx.collapseIcon} >
            <MinusIcon className={cx.minus} />
            <MinusIcon className={cls(cx.minus, { [cx.rotate]: isClose })} />
          </div>
        )}

        {
          typeof title === 'string'
            ? (<p className={cx.title}>
              {title}
            </p>)
            : title
        }

      </div>


      <div className={cx.content} ref={contentRef}>
        {content}
      </div>
      {moreText && (
        <div>
          <p
            className={cx.moreText}
            onClick={toggleOpen}
            onKeyDown={toggleOpen}
            role="presentation"
          >
            {isClose ? moreText : lessText || moreText}
          </p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
