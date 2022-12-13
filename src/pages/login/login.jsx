import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import React from 'react'
import styles from './style.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom'

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

  return (
    <Grid container spacing={2}>
    <Grid item  xs={12} sm={5} className={styles.dashWraper} sx={{display:{xs:"none",sm:"flex"}}}>
        <Box>
            <Typography variant='h2' fontWeight={'bold'} className={styles.headerContent} >Dash</Typography>
        </Box>
    </Grid>
    <Grid item xs={12} sm={7} className={styles.loginWrapper} >
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
                            <Box className={styles.registerWrapper}  >
                                  <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} width={'100%'} height={"100%"} >
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
                                              <Button variant='contained' sx={{width:"100%"}} onClick={()=>{navigate('/dashboard')}}  >Login</Button>
                                      </Box>
                                  </Stack>
                            </Box>
                    </Stack>
                    <Box sx={{textAlign:"center",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <Typography variant='body2' fontWeight={'bold'}>Don't have Already Account ?</Typography>
                      <Typography variant='body2' sx={{color:"blue",cursor:"pointer"}}>Register Here</Typography>
                    </Box>
              </Box>

    </Grid>
  </Grid>
    //   <div>
    //     <TextFieldCustom/>
    // </div>
  )
}
