import { Button } from "@/components/ui";
import cx from './index.module.scss';

export default function TabsWithBricks() {
  return (
    <div className={cx.wrapper}>
        

        <Button className={cx.active}>активные</Button>
        <Button className={cx.done}>завершенные</Button>
        <div className={cx.content}>

        </div>
    </div>
  )
}
