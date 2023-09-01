import React, { useState, ReactNode } from 'react';
import { Head } from "..";
import cx from './index.module.scss';

interface IProps {
    isEditable: boolean,
    component: ReactNode,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
}

export default function Layout({ isEditable, component, isEditing, setIsEditing }: IProps) {
    

    return (
        <>
            <Head isEditable={isEditable} isEditing={isEditing} setIsEditing={setIsEditing}/>

            {/* TODO: add container*/}
            {component}
        </>
    )
}
