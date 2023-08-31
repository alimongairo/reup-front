import React, { ReactNode } from 'react';
import { Head } from "..";
import cx from './index.module.scss';

interface IProps {
    isEditable: boolean,
    component: ReactNode,
}

export default function Top({ isEditable, component }: IProps) {
    return (
        <>
            {isEditable &&
                (<div>head bricks component</div>)
            }
            <Head isEditable={isEditable} schemeId={0} />

            {/* TODO: add container*/}
            {component}
        </>
    )
}
