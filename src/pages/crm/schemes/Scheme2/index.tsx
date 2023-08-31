import React from 'react';
import BrandPage from '../Scheme2/BrandPage/BrandPage';
import EditableScheme from '../Scheme2/EditablePage/EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";

const Scheme2 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage />,
        editComponent: <EditableScheme />,
    });

    return <div>{component}</div>;
};

export default Scheme2;
