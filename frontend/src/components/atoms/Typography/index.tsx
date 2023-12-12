import {Typography as MuiTypography, TypographyProps } from '@mui/material'
import React from 'react'
interface MuiTypographyProps extends TypographyProps{

}
const Typography:React.FC<MuiTypographyProps> = (props) => {
  return (
    <MuiTypography {...props}/>
  )
}

export default Typography