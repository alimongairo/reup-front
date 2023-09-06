import React, { useState } from 'react';
import BrandPage from './BrandPage';
import EditableScheme from './EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";
import { Layout } from "../../components";

const Scheme1 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage />,
        editComponent: <EditableScheme isEditing={isEditing}/>,
    });

    return <Layout isEditable={isEditable} component={component} isEditing={isEditing} setIsEditing={setIsEditing}/>;
};

export default Scheme1;
