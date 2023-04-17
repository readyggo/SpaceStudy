import { Box, Button, Typography } from '@mui/material';
import {theme,MainBox} from './js/theme';
import { Link } from 'react-router-dom';
import Header from './Header.js';

// site main
function Main() {
  return (
    <MainBox>
      <Header />
      <Box sx={{ height: '100vmin', width: '100%' }}>
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
              component={Link}
              to="/signIn"
              sx={{
                width: '100%',
                fontSize: { md: '1.5vw', xs: '3vw' },
                fontFamily: theme.title_font,
                background: theme.btn_yellow,
                border: 'solid 3px #fff',
                borderRadius: '30px',
              }}
            >
              START
            </Button>
          </Box>
        </Box>
      </Box>
    </MainBox>
  );
}

export default Main;
