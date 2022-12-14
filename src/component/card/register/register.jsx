import { Box, Stack, styled } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Card from '../card'
import styles from './style.module.css'
s

export default function Register() {
    const RegisterButtons = styled(Box)({
        background: "#EEF0EB",
        borderRadius:"15px",
        height:"3vh",
        padding:"5px",
        marginTop:"10px"
      })  
  return (
        <>
            <Card>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} width={'100%'} height={"100%"} >
                        <Box width={"90%"}>
                            <Typography variant='caption1' fontWeight={'bold'}>User Name</Typography>
                            <RegisterButtons> <InputBase placeholder='text' /></RegisterButtons>
                        </Box>
                        <Box width={"90%"}>
                            <Typography variant='caption1' fontWeight={'bold'}>Email Address</Typography>
                            <RegisterButtons> <InputBase placeholder='Email' /></RegisterButtons>
                        </Box>
                        <Box width={"90%"}>
                            <Typography variant='caption1'  fontWeight={'bold'}>Password</Typography>
                            <RegisterButtons> <InputBase placeholder='Password' type='password' sx={{height:"100%"}}/></RegisterButtons>
                        </Box>
                        <Box width={"90%"}>
                            <Typography variant='caption1' fontWeight={'bold'}>Forget Password?</Typography>
                        </Box>
                        <Box width={"90%"}>
                                <Button variant='contained' sx={{width:"100%"}} onClick={()=>{navigate('/dashboard')}}>Login</Button>
                        </Box>
                    </Stack>
            </Card>
        </>
  )
}
