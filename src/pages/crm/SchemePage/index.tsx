import { Scheme1, Scheme2, Scheme3 } from '../../../components/Brand/schemes';
import { Typography } from "../../../components/ui";
import { CRMLayout } from "../../../layouts";
import { useParams } from "react-router-dom";
import { useGetBrandPageStyleDataQuery } from "../../../redux/api/brandPageStyleApi";
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks";
import { setBaseData } from "../../../redux/features/brandSetting/slice";
import { RootState } from "../../../app/store";

export default function SchemePage() {
    const dispatch = useTypedDispatch();
    // TODO: fx any
    const { schemeId } = useParams() as any;

    // TODO: replace "12" to brand.id 
    // 1-33 вендор первая схема
    // 34-67 вторая
    // 68-100 третья
    // TODO: replace schemeId to brand.scheme_id (номер схемы из стора)
    // mock fn - remove
    const vendorIdReturner = (schemeId: number) => {
        switch (schemeId) {
            case 0: return "12";
            case 1: return "40";
            case 2: return "70";
            default: return "1"
        }
    }

    let { data, error, isLoading } = useGetBrandPageStyleDataQuery({ scheme_id: +schemeId, vendor_id: vendorIdReturner(+schemeId) });

    // TODO: fix any
    const [dataObj, setDataObj] = useState<any>();

    useEffect(() => {
        const newDataObj = data && data[0];
        setDataObj(newDataObj);
        dispatch(setBaseData({data: newDataObj, schemeId: +schemeId}));
        
    }, [data]);


    // TODO: если обновилась картинка, меняем отображение и отправляем на есрвер сразу (POST)
    const images = useTypedSelector((state: RootState) => state.brandSettings.images);

    useEffect(() => {
     console.log('--------------------------', images)
    }, [images])
    
    const schemes = [<Scheme1 key={0} data={dataObj} />, <Scheme2 key={1} data={dataObj}/>, <Scheme3 key={2} data={dataObj} />];
    const CurrentScheme = schemes[Number(schemeId)];

    return (
        <div style={{ background: dataObj?.background_color ? dataObj.background_color : "inherit" }}>
            {/* TODO: сделать обработку ошибки и загрузки для всех страниц */}
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading ? (
                <p>loading...</p>
            ) : dataObj ? (
                <CRMLayout>
                    <Typography variant="h1">{CurrentScheme}</Typography>
                </CRMLayout>
            ) : null}
        </div>
    )
}
