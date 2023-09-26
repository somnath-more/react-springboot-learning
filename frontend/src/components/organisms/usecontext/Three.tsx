import { Typography, typographyClasses } from '@mui/material';
import React from 'react'
import Four from './Four';

const Three = () => {
  return (
    <>
   <Typography variant='body1'>{`This is user three dont required data why still i need to pass user`}</Typography>
   <Four />
   </>
  )
}

export default Three