import { Box } from '@mui/material'
import React from 'react'
import styles from './style.module.css'

export default function Card({children}) {
  return (
    <Box className={styles.registerWrapper}  >
                {children}
    </Box>
  )
}
