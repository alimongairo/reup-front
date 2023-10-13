import React from 'react'

interface IProps {
  type?: "login" | "registration"
}

export default function SecondScreen({type = "login"}: IProps) {
  return (
    <div>SecondScreen</div>
  )
}
