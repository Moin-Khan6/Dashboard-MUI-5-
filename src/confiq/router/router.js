import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../../component/Feed'
import { Home,Group } from '../../pages'

export default function Routing() {
  return (
    <Router>
      <Routes>
            <Route path="/*" element={<Dashboard/>}  />
      </Routes>
  </Router>
)}
