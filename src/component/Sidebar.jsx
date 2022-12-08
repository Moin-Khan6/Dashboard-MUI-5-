import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'

export default function Sidebar({handleMode}) {
  const navigate = useNavigate()
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}> 
    <Box position="fixed" width ="15%" >
    <List sx={{width:"100%"}}>
          <ListItem disablePadding >
                <ListItemButton component ='a' onClick={(e)=>{ e.preventDefault(); navigate("/home")}} >
              <ListItemIcon>
                <AddHomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ='a' onClick={(e)=>{ e.preventDefault(); navigate("/group")}}>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ='a' href='home'>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ='a' href='#home'>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ='a' href='#home'>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Friend" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ='a' href='#home'>
              <ListItemIcon>
                <NightlightRoundIcon />
              </ListItemIcon>
              <Switch onClick={()=>{handleMode()}} />
            </ListItemButton>
          </ListItem>
    </List>
    </Box>
    </Box>
  )
}
