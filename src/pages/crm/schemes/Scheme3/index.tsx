import React from 'react';
import BrandPage from '../Scheme3/BrandPage/BrandPage';
import EditableScheme from '../Scheme3/EditablePage/EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";

const Scheme3 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage />,
        editComponent: <EditableScheme />,
    });

    return <div>{component}</div>;
};

export default Scheme3;
