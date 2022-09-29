import * as React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import "./Sidebar.css";




const SidebarItem = ({text} : {text: string}) => {
  return(
    <ListItem disablePadding>
      <ListItemButton>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}


export default function Sidebar() {
  return (
    <Box className='sidebar' sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <SidebarItem text="All" />
          <SidebarItem text="Dresses" />
          <SidebarItem text="Skirts" />
          <SidebarItem text="Shorts" />
          <SidebarItem text="Sweatshirts" />
          <SidebarItem text="Pants" />
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <SidebarItem text="FAQ" />
          <SidebarItem text="About us" />

        </List>
      </nav>
    </Box>
  );
}
