import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const MainPage = ({data}) => {
  let getData = JSON.parse(localStorage.getItem('userDetails'));
    const [getUserDetails, setGetUserDetails] = useState(getData);
  return (
    <>
    <Stack  display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} sx={{background:'lightblue',height:'100vh'}}> 
    
    {/* <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'flex-end'}> */}
   
    <Typography sx={{margin:'30px',fontSize:'30px',fontWeight:'600'}}>Welcome {getUserDetails.name}</Typography>
    <img src='/images.jfif'/>
    </Stack>
    </>
  )
}

export default MainPage