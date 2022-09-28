import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, ButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderItems } from './HeaderInfo';


export default function Header() {

  const Buttons = HeaderItems.map( item => <Button>{item}</Button>);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "white", color: "black"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store
            <ButtonGroup variant="text" aria-label="text button group" sx={{ml: "1rem"}}>
              {Buttons}
            </ButtonGroup>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}