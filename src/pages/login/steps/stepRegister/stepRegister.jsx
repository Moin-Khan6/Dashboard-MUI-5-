import { Button, InputBase, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Card from '../../../../component/card/card'
import { hash } from '../../../../utils/helpers'
import styles from './style.module.css'
export default function StepRegister({onNext}) {
    const RegisterButtons = styled(Box)({
        background: "#EEF0EB",
        borderRadius:"15px",
        height:"3vh",
        padding:"5px",
        marginTop:"10px"
      })  

const [obj, setObj] = useState({})

const userS = {
    id:hash()
}

const navigate = useNavigate()  

return (
        <Card>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} width={'100%'} height={"100%"} >
                <Box width={"90%"}>
                    <Typography variant='caption1' fontWeight={'bold'}>User Name</Typography>
                    <RegisterButtons> <InputBase placeholder='User Name' /></RegisterButtons>
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
  )}
