import React from 'react';
import BrandPage from '../Scheme1/BrandPage/BrandPage';
import EditableScheme from '../Scheme1/EditablePage/EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";
import { Head } from "../components";

const Scheme1 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage />,
        editComponent: <EditableScheme />,
    });

    return <div><Head isEditable={isEditable}/>{component}</div>;
};

export default Scheme1;
