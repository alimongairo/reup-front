import cls from 'classnames';
import cx from './index.module.scss';
import { useState } from "react";

// TODO: fix any
const EditableText = ({ currentText, isEditing, markup, className, type }: any) => {
    const [value, setValue] = useState(currentText);

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <>
            {
                isEditing ? <input className={cls(cx.input, cx[type], className)}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    
                // TODO: fix any
                /> : markup
            }
        </>
    )
}

export default EditableText;
