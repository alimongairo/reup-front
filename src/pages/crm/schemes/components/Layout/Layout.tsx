import React, { useState, ReactNode } from 'react';
import { Head } from "..";
import cx from './index.module.scss';

interface IProps {
    isEditable: boolean,
    component: ReactNode,
}

export default function Layout({ isEditable, component }: IProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <>
            <Head isEditable={isEditable} isEditing={isEditing} setIsEditing={setIsEditing}/>

            {/* TODO: add container*/}
            {component}
        </>
    )
}
