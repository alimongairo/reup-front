import { Scheme1, Scheme2, Scheme3 } from '../../../components/Brand/schemes';
import { Typography } from "../../../components/ui";
import { CRMLayout } from "../../../layouts";
import { useParams } from "react-router-dom";
import { useGetBrandPageStyle1DataQuery } from "../../../redux/api/brandPageStyle1Api";
import { useEffect, useState } from "react";

export default function SchemePage() {
    // TODO: fx any
    const { schemeId  } = useParams() as any;

    let { data, error, isLoading } = useGetBrandPageStyle1DataQuery({ scheme_id: +schemeId , vendor_id: "12" });

    // TODO: fix any
    const [dataObj, setDataObj] = useState<any>();

    useEffect(() => {
        const newDataObj = data && data[0];
        setDataObj(newDataObj);
    }, [data]);


    const schemes = [<Scheme1 key={0} data={dataObj} />, <Scheme2 key={1} />, <Scheme3 key={2} />];

    const CurrentScheme = schemes[Number(schemeId)];

    // TODO: replace "12" to brand.id (1-33 вендор первая схема)
    // TODO: replace 0 to brand.scheme_id (номер схемы)


    return (
        <>
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
        </>
    )
}
