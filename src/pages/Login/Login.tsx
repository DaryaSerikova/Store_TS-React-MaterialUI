import React from 'react';
import { TextField } from '@mui/material';
import { Paper } from '@mui/material';

import "./Login.css";
import { height } from '@mui/system';


export default function Login() {
  return (
    <div className='login-wrapper'>
      <Paper elevation={3} className="login-paper">

        <div style={{fontSize: "20pt", fontWeight: "600", width: "100%", display: "flex", justifyContent: "center", padding: "1rem 0"}}>Login</div>
        <form className='login-form'>
          <TextField 
            id="outlined-basic" 
            label="First Name" 
            variant="outlined"
            className='login-input'
          />
          <TextField 
            id="outlined-basic" 
            label="Last Name" 
            variant="outlined"
            className='login-input'

          />
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            className='login-input'

          />
          <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            className='login-input'
          />
        </form>
        <div style={{fontSize: "13pt", width: "100%", display: "flex", justifyContent: "center", padding: "1rem 0"}}>Forgot password?</div>
      </Paper>
    </div>
  )
}
