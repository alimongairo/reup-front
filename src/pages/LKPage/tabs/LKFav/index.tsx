import cx from './index.module.scss';
import { Typography } from '../../../../components/ui';
import ProductItem from '../../../../components/ProductItem';
import { uid } from 'react-uid';
import { EmptyList } from '../components';
import { ERoutes } from '@/router/types';

export default function LKFav() {
    // mock
    const mockData1 = Array(0).fill(null);
    const mockData2 = Array(8).fill(null);

    // TODO: сделать не слайдеры, а грид сетку
    return (
        <div className={cx.container}>
            <div className={cx.fav}>
                <Typography variant="h1">избранное</Typography>
                {mockData1.length > 0 ? (
                    <div className={cx.list}>
                        {mockData1.map((_, index) => (
                            <ProductItem key={uid(index)} size="apativeSize" />
                        ))}
                    </div>
                ) : (
                    <EmptyList
                        text="кажется, вам пока ничего не понравилось"
                        btnText="отправиться на поиски"
                        link={ERoutes.Default}
                    />
                )}
            </div>
            <div className={cx.relevant}>
                <Typography variant="h1">вам может понравиться</Typography>
                {mockData2.length > 0 ? (
                    <div className={cx.list}>
                        {mockData2.map((_, index) => (
                            <ProductItem key={uid(index)} size="apativeSize" />
                        ))}
                    </div>
                ) : (
                    <EmptyList
                        text="нет рекомендаций для вас"
                        btnText="отправиться на поиски"
                        link={ERoutes.Default}
                    />
                )}
            </div>
        </div>
    );
}
