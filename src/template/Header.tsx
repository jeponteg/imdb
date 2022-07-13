import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar sx={{background:'whitesmoke'}}>
      <Toolbar>
        <Typography variant="h6" component="div" color='#000'>
          IMDB
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header