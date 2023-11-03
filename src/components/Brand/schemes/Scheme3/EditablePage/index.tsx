import React from 'react';
import SchemeLayout from '../SchemeLayout';

interface IProps {
    isEditing: boolean;
    data: any;
}

export default function EditablePage({ isEditing, data }: IProps) {
    return <SchemeLayout isEditing={isEditing} data={data} />;
}
