import React from 'react';
import SchemeLayout from '../SchemeLayout';
import { IScheme1Brand } from '../../../../../types/brandTypes';

interface IProps {
    data: IScheme1Brand;
}

export default function BrandPage({ data }: IProps) {
    return <SchemeLayout isEditing={false} data={data} />;
}
