import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Tooltip } from '@mui/material';

export default function Add({onClick}) {
  return (<>
    <Tooltip onClick={onClick}>
      <Fab color="primary" aria-label="add" >
        <AddIcon  />
      </Fab>
    </Tooltip>
  </>
  )
}
