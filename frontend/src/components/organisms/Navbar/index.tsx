import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const NavBarContainer=styled(Paper)({
    height:'98vh',
    width:'200px',
    background:'blue'
})

const IconContainer=styled(Box)({
    display:"flex",
    flexDirection:"column",
   padding:'70px',
   gap:'20px'
})
const NavBar = () => {
  return (
   <NavBarContainer>
         <IconContainer>
            <MenuIcon/>
            <MenuIcon/>
            <MenuIcon/>
            <MenuIcon/>
            <MenuIcon/>
            <MenuIcon/>
         </IconContainer>
   </NavBarContainer>
  )
}

export default NavBar