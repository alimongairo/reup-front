import { Scheme1, Scheme2, Scheme3 } from '../components/Brand/schemes';
import { Typography } from "../components/ui";
import { CRMLayout } from "../layouts";
import { useParams } from "react-router-dom";
 
const schemes = [<Scheme1 key={0} />, <Scheme2 key={1} />, <Scheme3 key={2} />];

export default function BrandPage() {
    const { schemeId } = useParams();
    const CurrentScheme = schemes[Number(schemeId)];

    return (
        <CRMLayout>
            <Typography variant="h1">{CurrentScheme}</Typography>
        </CRMLayout>
    )
}
