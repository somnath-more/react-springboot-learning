import { Typography } from '@mui/material'
import React from 'react'
import Three from './Three';
interface TwoProps{
    user:string;
}
const Two:React.FC<TwoProps> = ({user}) => {
  return (
    <>
    <Typography variant="h1" >{`This is user 2 data ${user}`}</Typography>
    <Three user={user} />
    </>
  )
}

export default Two