import React from 'react'
import NavBar from '../../organisms/Navbar'
import ProductTable from '../../organisms/ProductTable'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Header from '../../organisms/Header'

const DashboardContainer=styled(Box)({
    display:'flex',
})
const Dashboard = () => {
  return (
  
   <DashboardContainer>
    <NavBar/>
    
   
    <ProductTable/>
  
    </DashboardContainer>

  )
}

export default Dashboard