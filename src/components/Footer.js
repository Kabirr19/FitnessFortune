import React from 'react'
import {Box ,Stack ,Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
        <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
          <img src={Logo} width='200px' height='40px' />
          <Typography varient ='h5' p='40px' mt='20px'>
            Coded by Himanshu Madnani
          </Typography>
        </Stack>
    </Box>
  )
}

export default Footer