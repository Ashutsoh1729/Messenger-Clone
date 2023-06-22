'use client'
import React from 'react'

interface ButtonProps{
    lable: string,
    onAction: string
}

const Button: React.FC<ButtonProps> = ({
    lable,onAction
}) => {

  return (
      <div onClick={()=>onAction}>
          {lable}
    </div>

  )
}


export default Button