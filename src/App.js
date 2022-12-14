import React, { useState } from 'react'
import { Box } from '@mui/system';
import Dashboard from './pages/dashboard/dashboard';
import Routing from './confiq/router/router';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const [mode, setMode]=useState("light")
  const handleMode =()=>{
      if(mode =='light'){
        setMode('dark')
      }
      else{
        setMode('light')
      }
  }
  const  darkTheme = createTheme({
    palette:{
      mode:mode
    },
    typography:{
      fontFamily:"Quicksand",
      fontWeightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:600,
      fontWeightBold:700,
    }
  })
  return (
      <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
                <Routing handleMode={handleMode}/>
          </Box>
      </ThemeProvider>
  );
}

export default App;
