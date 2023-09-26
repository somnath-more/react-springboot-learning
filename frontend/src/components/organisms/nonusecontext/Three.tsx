import { Typography, typographyClasses } from '@mui/material';
import React from 'react'
import Four from './Four';
interface ThreeProps{
    user:string;
}
const Three:React.FC<ThreeProps> = ({user}) => {
  return (
    <>
   <Typography variant='body1'>{`This is user three dont required data why still i need to pass user`}</Typography>
   <Four user={user}/>
   </>
  )
}

export default Three