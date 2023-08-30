import React, {ReactNode} from 'react'
import { Header } from "../components/ui"

interface IProps {children: ReactNode}

export default function MainLayout({children}: IProps) {
  return (
    <div>
        <Header />
        {children}
        
        </div>
  )
}
