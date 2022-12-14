import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/dashboard'
import Login from '../../pages/login/login'

export default function Routing({handleMode}) {
  return (<>
    <Router>
      <Routes>
            <Route path="/" element={<Login/>}  />
            <Route path="/dashboard/*" element={<Dashboard handleMode={handleMode}/>}  />
      </Routes>
  </Router>
  </>
)}
