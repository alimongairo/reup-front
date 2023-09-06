import React, { HTMLInputTypeAttribute, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import CodeInput from './CodeInput';

import cx from './index.module.scss';

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: HTMLInputTypeAttribute;
  codeInput?: boolean;
  invalid?: boolean;
  label?: string;
  errorMessage?: string;
  theme?: 'light' | 'grey';
  isTextArea?: boolean;
  isWrapped?: boolean;
}

const Input = ({
  className,
  invalid,
  errorMessage,
  codeInput,
  label,
  theme = 'light',
  isTextArea,
  isWrapped = false,
  ...props
}: IProps) => {
  if (codeInput) {
    return <CodeInput {...props} />;
  }

  const Input = (
    <>
      {label && <p className={cx.label}>{label}</p>}
      {isTextArea ? (
        <textarea
          className={classNames(className, cx.input, cx[theme], {
            [cx.invalid]: invalid,
          })}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={classNames(className, cx.input, cx[theme], {
            [cx.invalid]: invalid,
          })}
          {...props}
        />
      )}

      {errorMessage && (
        <p
          className={classNames(
            { [cx.visibleError]: invalid },
            cx.errorMessage,
          )}
        >
          {errorMessage}
        </p>
      )}
    </>
  );

  if (!isWrapped) {
    return Input;
  } else {
    return <div>{Input}</div>;
  }
};

export default Input;
