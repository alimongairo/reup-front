import cx from './index.module.scss';
import { Typography } from '@/components/ui';
import { ERoutes } from '@/router/types';
import { EmptyList } from '../components';
import { DetailsContent, MainContent } from './components';

interface IProps {
    content: 'main' | 'details';
}
export default function LKOrders({ content }: IProps) {
    // mock
    const mockData = Array(10).fill(null);

    return (
        <div className={cx.container}>
            <Typography variant="h1">мои заказы</Typography>
            {mockData.length > 0 ? (
                content === 'main' ? (
                    <MainContent />
                ) : (
                    <DetailsContent />
                )
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
