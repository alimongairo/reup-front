import React, { useState } from 'react';
import BrandPage from '../Scheme2/BrandPage/BrandPage';
import EditableScheme from '../Scheme2/EditablePage/EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";
import { Layout } from "../../components";

const Scheme2 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage isEditable={isEditable}/>,
        editComponent: <EditableScheme isEditing={isEditing} isEditable={isEditable}/>,
    });

    return <Layout isEditable={isEditable} component={component} isEditing={isEditing} setIsEditing={setIsEditing}/>;
};

export default Scheme2;
