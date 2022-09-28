import React from 'react';
import { Button, IconButton, TextField } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';
import "./Search.css";


export default function Search() {
  return (
    <div className="search">
    <TextField 
      id="outlined-basic" 
      label="Search" 
      variant="outlined"
      // value={value}
      // onChange={onChangeInput}
      fullWidth
      // sx={{margin: "1.5rem 0 0.8rem", boxSizing: "border-box"}}
    />
    <IconButton sx={{ml: "0.5rem"}}>
      <TuneIcon sx={{minWidth: '40px'}}/>
    </IconButton>
    </div>
  )
}
