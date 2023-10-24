import React, { useState } from 'react';
import BrandPage from './BrandPage';
import EditableScheme from './EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "@/hooks";
import { Layout } from "../../components";
import { IScheme3Brand } from "../../../../types/brandTypes";

interface IProps {
    data: IScheme3Brand;
}

const Scheme3 = ({data} : IProps) => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage data={data}/>,
        editComponent: <EditableScheme isEditing={isEditing} data={data}/>,
    });

    return <Layout isEditable={isEditable} component={component} isEditing={isEditing} setIsEditing={setIsEditing} data={data}/>;
};

export default Scheme3;
