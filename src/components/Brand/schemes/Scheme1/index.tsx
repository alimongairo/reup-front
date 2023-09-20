import { useState } from 'react';
import BrandPage from './BrandPage';
import EditableScheme from './EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery, useTypedSelector } from "../../../../hooks";
import { Layout } from "../../components";
import { useGetBrandPageStyle1DataQuery } from '../../../../redux/api/brandApi';

const Scheme1 = () => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const brand = useTypedSelector((state) => state.brand);

    const { data } = useGetBrandPageStyle1DataQuery({scheme_id: brand.scheme_id, vendor_id: brand.id}); // TODO: вывести поля

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage />,
        editComponent: <EditableScheme isEditing={isEditing}/>,
    });

    return <Layout isEditable={isEditable} component={component} isEditing={isEditing} setIsEditing={setIsEditing}/>;
};

export default Scheme1;
