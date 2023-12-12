import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import React from 'react'
import Typography from '../../atoms/Typography'
const HeaderContainer=styled(Paper)({
    display:'flex'
})
const Header = () => {
  return (
    <HeaderContainer>
        <Typography variant='h3'>{"Plant"}</Typography>
    </HeaderContainer>
  )
}

export default Header