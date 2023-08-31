import React from 'react';
import BrandPage from '../Scheme2/BrandPage/BrandPage';
import EditableScheme from '../Scheme2/EditablePage/EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";
import { Layout } from "../components";

const Scheme2 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage />,
        editComponent: <EditableScheme />,
    });

    return <Layout isEditable={isEditable} component={component}/>;
};

export default Scheme2;
