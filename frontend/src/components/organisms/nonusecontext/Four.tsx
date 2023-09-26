import { Typography } from '@mui/material';
import React from 'react'
interface FourProps{
    user:string;
}
const Four :React.FC<FourProps>= ({user}) => {
  return (
   <Typography variant="h6">{`Final USer Got it ${user}`}</Typography>
  )
}

export default Four