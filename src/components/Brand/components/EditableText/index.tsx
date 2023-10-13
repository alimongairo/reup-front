// Не используется (нужно для того, чтобы менять текст при клике на него - мейби в дальнейшем апгрейднуть brandPage)

import cls from 'classnames';
import cx from './index.module.scss';
import { useState } from "react";

interface IProps {
    currentText: string,
    isEditing: boolean
    markup: JSX.Element,
    className: string,
    type: string,
}

const EditableText = ({ currentText, isEditing, markup, className, type }: IProps) => {
    const [value, setValue] = useState(currentText);

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <>
            {
                isEditing ? <textarea className={cls(cx.textarea, cx[type], className)}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                /> : markup
            }
        </>
    )
}

export default EditableText;
