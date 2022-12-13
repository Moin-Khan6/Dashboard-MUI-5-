import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../../component/Feed'
import { Home,Group } from '../../pages'
import Dashboard from '../../pages/dashboard/dashboard'
import Login from '../../pages/login/login'



export default function Routing() {
  return (<>
    <Router>
      <Routes>
            <Route path="/login" element={<Login/>}  />
            <Route path="/*" element={<Dashboard/>}  />
      </Routes>
  </Router>
  </>
)}
