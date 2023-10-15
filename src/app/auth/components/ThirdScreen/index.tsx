import React, { useContext } from 'react'
import { EType } from "../types"
import { Button } from "../../../../components/ui"
import { AuthContext } from "../..";

interface IProps {
  type?: EType
}

export default function ThirdScreen({ type = EType.LOGIN }: IProps) {
  const authContextValue = useContext(AuthContext);

  if (type === EType.LOGIN) {
      return (<Button onClick={authContextValue?.onPopupClose as () => void}>к покупкам</Button>)
  } else {
    return (<div>добавили информацию в личный кабинет</div>)

  }

}
