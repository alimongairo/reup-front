import React from 'react';
import SchemeLayout from '../SchemeLayout';
import { IScheme3Brand } from '../../../../../types/brandTypes';

interface IProps {
    data: IScheme3Brand;
}

export default function BrandPage({ data }: IProps) {
    return <SchemeLayout isEditing={false} data={data} />;
}
