import { useState, useCallback } from 'react'
import { CRMLayout } from "../../layouts";
import { Field } from "./components";
import cx from './index.module.scss';
import { Button, Image } from "../../components/ui";
import { uid } from "react-uid";
import { Link } from "react-router-dom";
import Scheme1 from '../../../static/images/crm/schemes/scheme1.png';
import Scheme2 from '../../../static/images/crm/schemes/scheme2.png';
import Scheme3 from '../../../static/images/crm/schemes/scheme3.png';
import { ERoutes } from '../../app/router/config';


const schemes = [
    { id: 0, title: "шаблон / 1", img: Scheme1 },
    { id: 1, title: "шаблон / 2", img: Scheme2 },
    { id: 2, title: "шаблон / 3", img: Scheme3 }
];

export default function SchemeSelectionPage() {

    const [activeScheme, setActiveScheme] = useState(0);

    const onSchemeClick = useCallback(
        (id: number) => {
            setActiveScheme(id)
        },
        [activeScheme],
    )

    return (
        <CRMLayout>
            <div className={cx.wrapper}>
                <div>
                    <div className={cx.variants}>
                        {
                            schemes.map((item, index) => <Field key={uid(item.id, index)} isActive={item.id === activeScheme} title={item.title} onClick={() => onSchemeClick(item.id)} />)
                        }
                    </div>
                    <Link to={`${ERoutes.CrmScheme}/${activeScheme}/?isEditable=true`}>
                        <Button>выбрать</Button>
                    </Link>

                </div>
                <Image src={schemes[activeScheme].img} className={cx.image} />

            </div>
        </CRMLayout>
    )
}
