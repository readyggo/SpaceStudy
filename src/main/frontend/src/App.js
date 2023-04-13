import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch ,Router } from "react-router-dom";
import theme from './js/theme';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/main')
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <Box
      id="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '1280px',
        height: '100vh',
        width: '100vm',
        margin: '0 auto',
      }}
    >
      <Header />
      <Main />
    </Box>
  );
}

function Main() {
  return (
    <Box sx={{ height: { md: '100%', xs: '50%' }, width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            height: '60%',
            width: { md: '100%', xs: '70%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              fontFamily: theme.title_font,
              color: '#fff',
              fontSize: { md: '5vw', xs: '7vw' },
              width: '100%',
              height: '50%',
            }}
          >
            Would you Study?
          </Typography>
        </Box>
        <Box
          sx={{
            height: '40%',
            minWidth: { md: '10vw', xs: '20vw' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
          <Button
            sx={{
              width: '100%',
              fontSize: { md: '1.5vw', xs: '3vw' },
              fontFamily: theme.title_font,
              background: theme.btn_yellow,
              border: 'solid 3px #fff',
              borderRadius: '30px',
            }}
          >
            {' '}
            START
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  const pages = ['about', 'tutorial', 'Q&A'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        position: { md: 'static', xs: 'fixed' },
        height: { md: '20%' },
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* menu : logo */}
        <Box xl={6} sx={{ maxWidth: { md: '150px', xs: '100px' } }}>
          <img src="./img/logo.png"></img>
        </Box>

        {/* md : menu : list */}
        <Box xl={6}>
          <Box spacing={3} sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              width: { md: '300px' },
              justifyContent: { md: 'space-between' },
            }}>
            {pages.map((page) => (
              <Button key={page}
                sx={{
                  color: '#fff',
                  display: 'block',
                  fontFamily: theme.nav_font,
                }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* xs : menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              // anchorOrigin={{
              //   vertical: 'bottom',
              //   horizontal: 'right',
              // }}
              // keepMounted
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right',
              // }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default App;
