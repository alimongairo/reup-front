import React from 'react';
import { Image } from '@/components/ui';
import cls from 'classnames';
import cx from './index.module.scss';
import { FilesUploader } from '..';

interface IProps {
    className?: string;
    src?: string;
    alt?: string;
    isEditing: boolean;
    name: string;
}

export default function EditableImage({
    isEditing,
    className,
    src = process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE,
    alt = 'placeholder',
    name,
}: IProps) {
    return (
        <div className={cls(className, cx.editableImage)}>
            <Image src={src} alt={alt} />
            {isEditing && (
                <FilesUploader className={cx.input} name={name}>
                    <FilesUploader.Input label="добавить фото / видео" />
                </FilesUploader>
            )}
        </div>
    );
}
