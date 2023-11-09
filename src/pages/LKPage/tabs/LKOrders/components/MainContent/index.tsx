import OrdersTable from "@/components/OrdersTable";
import { ERoutes } from "@/router/types";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function MainContent() {
    const navigate = useNavigate();

    const onDetailsClick = () => {
        // navigate(`${ERoutes.LK}/orders/1` );
        navigate({
          pathname: `${ERoutes.LK}/orders/`,
          search: createSearchParams({
              id: '12131333'
          }).toString()
      });
    }
  return (
    <div>MainContent
      <OrdersTable />
        <button onClick={onDetailsClick}>подробнее</button>
    </div>
  )
}
