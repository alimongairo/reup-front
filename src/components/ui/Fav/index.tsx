import { Button } from '..';
import { EBtnColor } from "../Button";
import { ReactComponent as HeartIcon } from "S#/images/icons/heart.svg";
import { strokeColorReturner } from "@/helpers";

interface IProps {
    isActive: boolean,
    onClick?: () => void,
    className?: string,
    isInBtn?: boolean,
}


export default function Fav({ isActive, onClick = () => { console.log('on fav click') }, isInBtn = false, className }: IProps) {

    if (isInBtn) {
        return <HeartIcon fill={isActive ? strokeColorReturner(false) : 'none'} />
    } else {
        return (
            <Button onClick={onClick} className={className} variant="contained" iconName="fav" colorM={EBtnColor.DEFAULT}>
                <HeartIcon fill={isActive ? strokeColorReturner(false) : 'none'} />
            </Button>
        )
    }

}
