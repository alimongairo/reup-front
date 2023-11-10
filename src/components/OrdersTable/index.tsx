
// import cx from './index.module.scss';

import { TabsWithBricks } from "../ui";
import { OrderItem } from "./components";

export default function OrdersTable() {

  return (
    <div>

      здесь табличка с табами чтобы смотреть все в списках
      При клике на подробнее меняется контент на подробности о заказе (при этом менять урл, чтобы можно было перейти в подробночти зказа по id)
      <TabsWithBricks content={<OrderItem />} />
    </div>
  )
}
