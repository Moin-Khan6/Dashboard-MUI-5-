import React from 'react'
import { Box, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ArticleIcon from '@mui/icons-material/Article';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TransitionsModal from './modal';
import AddIcon from '@mui/icons-material/Add';
import Add from './add';


export default function Sidebar({handleMode}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();
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
              <ListItemButton component ='a' href='#home'>
                <ListItemIcon>
                  <NightlightRoundIcon />
                </ListItemIcon>
                <Switch onClick={()=>{handleMode()}} />
              </ListItemButton>
            </ListItem>
      </List>
    </Box>
    <Box position={'fixed'} top ="855px" left="125px">
      <Add onClick={handleOpen}/>
    </Box>
       <TransitionsModal handleClose={handleClose} handleOpen={handleOpen} open={open} />
    </Box>
  )
}
