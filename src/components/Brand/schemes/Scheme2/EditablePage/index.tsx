import React from 'react';
import SchemeLayout from '../SchemeLayout';
import { IScheme2Brand } from '../../../../../types/brandTypes';

interface IProps {
    isEditing: boolean;
    isEditable: boolean;
    data: IScheme2Brand;
}

export default function EditablePage({ isEditing, isEditable, data }: IProps) {
    return (
        <SchemeLayout
            isEditing={isEditing}
            isEditable={isEditable}
            data={data}
        />
    );
}
