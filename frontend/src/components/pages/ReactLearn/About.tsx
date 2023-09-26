import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const [color,setColor]=useState("gunna");
  const navigate=useNavigate();
  return (
    <div>
      About
      <h1>I am this type of color {color}</h1>
      <Button onClick={()=>setColor('red')} >Red</Button>
      <Button onClick={()=>setColor("green")} >Green</Button>
      <Link to={'/UseEffectPage'}>
      <Button >UseEffectPageSnnippet</Button>
      </Link>
      <Button onClick={()=>navigate(-1)} >Go to Home</Button>
        
    </div>
  )
}

export default About