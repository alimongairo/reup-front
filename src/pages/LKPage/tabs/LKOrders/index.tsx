import cx from './index.module.scss';
import { Typography } from "../../../../components/ui";
import { EmptyList } from "../components";
import { ERoutes } from '../../../../router/types';

export default function LKOrders() {
    // mock
    const mockData = Array(0).fill(null);

    return (
        <div className={cx.container}>
            <Typography variant="h1">мои заказы</Typography>
            {mockData.length > 0 ? (
                <div>list</div>
            ) : (
                <EmptyList
                    text={
                        <>
                            здесь пока нет заказов
                            <br />
                            может, Вы еще не нашли то, что искали?
                        </>
                    }
                    btnText="отправиться на поиски"
                    link={ERoutes.Default}
                />
            )}
        </div>
    );
}
