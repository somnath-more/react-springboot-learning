import { Typography } from '@mui/material';
import React from 'react'
import Two from './Two';
interface OneProps{
     user:string;
}
const One:React.FC<OneProps>= ({user}) => {
  return (
    <>
    <Typography variant="body1">{`Hello this is ${user} No:1`}</Typography>
     <Two user={user}/>
    </>
  )
}

export default One;