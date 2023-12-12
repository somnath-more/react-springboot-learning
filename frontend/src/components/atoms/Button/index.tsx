import {Button as MuiButton, ButtonProps } from '@mui/material'
import React from 'react'
interface MuiButtonProps extends ButtonProps{

}
const Button:React.FC<MuiButtonProps> = (props) => {
  return (
    <MuiButton {...props}/>
  )
}

export default Button