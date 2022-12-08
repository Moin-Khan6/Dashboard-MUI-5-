import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import Feed from '../../component/Feed'
import Navbar from '../../component/Navbar'
import Rightbar from '../../component/Rightbar'
import Sidebar from '../../component/Sidebar'
import Group from '../group/group'
import Home from '../home/home'
import styles from './style.module.css'

export default function Dashboard() {
  const [mode, setMode]=useState(false)
  const handleMode =()=>{
    setMode(!mode)
  }
  return (
    <Box className={ mode ? styles.darkMode : styles.darkLight } >
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
      <Sidebar handleMode ={handleMode}   />
      <Box flex={4}> 
            <Routes>
                <Route path="/" element={<Feed/>}  />
                <Route path="home" element={<Home/>}  />
                <Route path="group" element={<Group/>}  />
            </Routes>
      </Box> 
      <Rightbar/>
      </Stack>
    </Box>
  )
}
