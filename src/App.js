import { Stack } from '@mui/material';
import React from 'react'
import { Box } from '@mui/system';
import Navbar from './component/Navbar';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';
import Routing from './confiq/router/router'
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Box>
        <Dashboard/>
    </Box>
  );
}

export default App;
