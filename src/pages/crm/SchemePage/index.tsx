import { Scheme1, Scheme2, Scheme3 } from '../../../components/Brand/schemes';
import { Typography } from "@/components/ui";
import { CRMLayout } from "@/layouts";
import { useParams } from "react-router-dom";
import { useGetBrandPageStyleDataQuery } from "../../../redux/api/brandPageStyleApi";
import { useEffect, useState } from "react";
import { useTypedDispatch } from "@/hooks";
import { setBaseData } from "../../../redux/features/brandSetting/slice";
import { IScheme1Brand, IScheme2Brand, IScheme3Brand } from "../../../types/brandTypes";

type TSchemeParams = {
    schemeId: string;
  };

export default function SchemePage() {
    const dispatch = useTypedDispatch();

    const { schemeId } = useParams<keyof TSchemeParams>() as TSchemeParams;

    // TODO: replace vendorIdReturner(+schemeId) to brand.id (стор)
    // replace schemeId to brand.scheme_id (стор)
    // 1-33 вендор первая схема
    // 34-67 вторая
    // 68-100 третья
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

    const [dataObj, setDataObj] = useState<IScheme1Brand | IScheme2Brand | IScheme3Brand>();

    useEffect(() => {
        const newDataObj = data && data[0];
        setDataObj(newDataObj);
        dispatch(setBaseData({data: newDataObj, schemeId: +schemeId}));
        
    }, [data]);
    
    const schemes = [
        <Scheme1 key={0} data={dataObj as IScheme1Brand} />, 
        <Scheme2 key={1} data={dataObj as IScheme2Brand}/>, 
        <Scheme3 key={2} data={dataObj as IScheme3Brand} />,
    ];

    const CurrentScheme = schemes[Number(schemeId)];

    return (
        <div style={{ background: dataObj?.background_color ? dataObj.background_color : "inherit" }}>
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
