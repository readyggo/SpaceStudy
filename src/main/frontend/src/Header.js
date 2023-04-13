import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import theme from './js/theme';

// site header nav
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
import { Link } from 'react-router-dom';

function Header() {
  const pages = ['about', 'tutorial', 'Q&A'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(anchorElNav);
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

  // menu set
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
        <Box
          component={Link}
          to="/"
          xl={6}
          sx={{ maxWidth: { md: '150px', xs: '100px' } }}
        >
          <img src="./img/logo.png"></img>
        </Box>

        {/* md : menu : list */}
        <Box xl={6}>
          <Box
            spacing={3}
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              width: { md: '300px' },
              justifyContent: { md: 'space-between' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={'/' + page}
                sx={{
                  color: '#fff',
                  display: 'block',
                  fontFamily: theme.nav_font,
                }}
              >
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
              autoFocus
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={'/' + page}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
