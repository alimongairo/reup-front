import { useState } from 'react';
import BrandPage from './BrandPage';
import EditableScheme from './EditablePage';
import useWithEdit from '../../../../hooks/useWithEdit';
import { useQuery } from "../../../../hooks";
import { Layout } from "../../components";

// TODO: fx any
interface IProps {
    data: any;
}

const Scheme1 = ({data} : IProps) => {
    const query = useQuery();
    const isEditable = query.get("isEditable") === 'true';

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const component = useWithEdit({
        editable: isEditable,
        disableComponent: <BrandPage data={data}/>,
        editComponent: <EditableScheme isEditing={isEditing} data={data}/>,
    });

    return <Layout isEditable={isEditable} component={component as JSX.Element} isEditing={isEditing} setIsEditing={setIsEditing}/>;
};

export default Scheme1;
