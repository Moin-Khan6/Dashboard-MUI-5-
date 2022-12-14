import { TextField } from '@mui/material'
import React from 'react'

export default function TextFieldCustom({label, onChange,value }) {
  return (
    <>
      <TextField label={label} value={value} onChange={onChange}/> 
    </>
  )
}
