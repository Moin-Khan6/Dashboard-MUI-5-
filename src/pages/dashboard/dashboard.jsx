import { Box, Fab, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import Add from '../../component/add'
import Feed from '../../component/Feed'
import Navbar from '../../component/Navbar'
import Rightbar from '../../component/Rightbar'
import Sidebar from '../../component/Sidebar'
import Group from '../group/group'
import Home from '../home/home'

export default function Dashboard({handleMode}) {
  return (
    <Box >
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
