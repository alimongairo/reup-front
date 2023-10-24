import React, { useState } from 'react';
import BrandPage from './BrandPage';
import EditableScheme from './EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "@/hooks";
import { Layout } from "../../components";
import { IScheme2Brand } from "../../../../types/brandTypes";

interface IProps {
    data: IScheme2Brand;
}

const Scheme2 = ({data} : IProps) => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage isEditable={isEditable} data={data}/>,
        editComponent: <EditableScheme isEditing={isEditing} isEditable={isEditable} data={data}/>,
    });

    return <Layout isEditable={isEditable} component={component} isEditing={isEditing} setIsEditing={setIsEditing} data={data}/>;
};

export default Scheme2;
