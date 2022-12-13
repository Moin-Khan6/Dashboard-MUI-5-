import { TextField } from '@mui/material'
import React from 'react'

export default function TextFieldCustom({label, handleChange,value}) {
  return (
<TextField
  id="outlined-name"
  label={label}
  value={value}
  onChange={handleChange}
/>  )
}
