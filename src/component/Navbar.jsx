import { AppBar, Badge, Box, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import PetsIcon from '@mui/icons-material/Pets';
import { borderRadius, width } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router';

export default function Navbar() {
const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Icons = styled("div")({
  display:"flex",
  gap:"20px",
  justifyContent:'center',
  alignItems:"center"
})

const Search = styled(Box)(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:"5px",
  width:"40%"
}));

const UserBox = styled(Box)(({ theme })=>({
    display:"flex",
    // [theme.breakpoints.up('sm')]:{
    //   display:"flex"
    // }
}))


const[open,setOpen] =useState(false)
const navigate = useNavigate()
  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block",cursor:"pointer"}}} onClick={()=>{navigate('/')}}  >LAMA DEV </Typography>
        <Typography variant='h6' sx={{display:{xs:"block",sm:"none"}}}><PetsIcon/></Typography>
        <Search><InputBase placeholder='Search ....'/></Search>
        <Icons><Badge badgeContent={4} color="error">
              <MailIcon color="action" />
              </Badge>
              <UserBox onClick={()=>{setOpen(!open)}}>
              <Avatar  sx={{width:"30px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </UserBox>
        </Icons>
      </StyledToolbar>

      <Menu
        id="basic-menu"
        open={open}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        onClose={()=>{setOpen(false)}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}
