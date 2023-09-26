import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'

const UseEffectPage = () => {
    const [count,setCount]=useState(1);
    useEffect(()=>{
          setTimeout(()=>{
               setCount((count)=>count+1);
          },1000)
    },[])
  return (
    <>
      <Typography>{`I have Counter this times${count} `}</Typography>
    </>
  )
}

export default UseEffectPage
