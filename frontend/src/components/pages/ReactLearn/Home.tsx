import { Button, Grid } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate =useNavigate();
  return (
    <div>
        <h1>Home</h1>
        <Button onClick={()=>navigate('/about')} >Go to About</Button>
        <Grid >
          Hello i am going to about page
          <Link to="/about">Home</Link>
        </Grid>
        <Button onClick={()=>navigate("/UseEffectPage")}>Goto UseEffect</Button>
        <Button onClick={()=>navigate("/component1")}>Component1</Button>
        <Button onClick={()=>navigate("/component5")}>Component5</Button>

       {/* Non use context */}
       <Button onClick={()=>navigate("/nonusecontext")}>NonUseContext</Button>
       <Button onClick={()=>navigate("/usecontext")}>UseContext</Button>
    </div>
  )
}

export default Home