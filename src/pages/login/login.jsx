import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import React, { useState } from 'react'
import styles from './style.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../component/card/card';
import Register from './steps/stepRegister/stepRegister';
import StepLogin from './steps/stepLogin/stepLogin';
import StepRegister from './steps/stepRegister/stepRegister';


const steps = {
  1:StepLogin,
  2:StepRegister
}

export default function Login() {
  
  const navigate = useNavigate()
  const BlueButton = styled(Button)({
    background: "white",
    outline:'none',
    color:'silver',
    borderRadius:"10px",
    "&:hover":{background:"white"}
    })

  const RegisterButtons = styled(Box)({
    background: "#EEF0EB",
    borderRadius:"15px",
    height:"3vh",
    padding:"5px",
    marginTop:"10px"
  })  

  const [step, setStep] = useState(1)
  let Step =  steps[step];

  const onNext = ()=>{
    setStep(step+1)
  }

  return (
    <Grid container  >
    <Grid item  xs={0} lg={5} className={styles.dashWraper} sx={{display:{sm:"none",lg:"flex"}}}>
        <Box>
            <Typography variant='h2' fontWeight={'bold'} className={styles.headerContent} >Dash</Typography>
        </Box>
    </Grid>
    <Grid item xs={12} lg={7} className={styles.loginWrapper} >
              <Box className={styles.loginBox} >
                    <Stack>
                          <Box >
                            <Typography variant='h4' fontWeight={'bold'}>Sign In</Typography>
                          </Box>
                          <Box sx={{marginTop:"3px"}}>
                          <Typography variant='body1' fontWeight={'bold'}>Sign in to your account</Typography>
                          </Box>
                          <Stack direction={'row'} justifyContent={'space-between'} alignContent={'center'} sx={{marginTop:"25px"}} >
                              <Box>
                                  <BlueButton  startIcon={<GoogleIcon sx={{color:"red"}} />}>Sign In With Google</BlueButton>
                              </Box>
                              <Box>
                                  <BlueButton  startIcon={<AppleIcon />}>Sign in with Apple</BlueButton>
                              </Box>
                          </Stack>
                          <Step onNext={onNext}/>   
                    </Stack>
               </Box>
     </Grid>
   </Grid>
  
  )
}
