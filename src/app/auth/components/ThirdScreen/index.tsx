import React from 'react'

interface IProps {
  type?: "login" | "registration"
}

export default function ThirdScreen({type = "login"}: IProps) {
  return (
    <div>ThirdScreen</div>
  )
}
