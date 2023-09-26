import { Typography } from '@mui/material';
import React, { createContext, useContext } from 'react'
import { UserContext } from './One';

const Four = () => {
const data= useContext(UserContext);
    console.log(data);
  return (
   <Typography variant="h6">{`Final User Got it ${data?.user}`}</Typography>
  )
}

export default Four