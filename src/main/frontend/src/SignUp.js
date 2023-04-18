import React from 'react';
import {
  Box,
  TextField,
  Container,
  Avatar,
  Button,
  Link,
  Typography,
  Grid,
} from '@mui/material';
import { theme, MainBox } from './js/theme.js';

function SignUp() {
  return (
    <MainBox>
      <Box
        sx={{
          width: { md: '50%', xs: '100%' },
          marginTop: '10%',
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            width: '100%',
            height: '600px',
            background: { md: theme.pop_color, xs: 'none' },
            borderRadius: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '80%',
            }}
          >
            <Avatar
              alt="logo"
              src="/img/single_logo.png"
              sx={{ mb: 3, width: 80, height: 80 }}
              variant="square"
            ></Avatar>

            <Box
              sx={{
                '& fieldset': {
                  borderColor: '#fff',
                },
                '& label': {
                  color: '#fff',
                },
                '& input': {
                  color: '#fff',
                },

                width: '100%',
                display: 'flex',
              }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    color="success"
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{
                      '&:hover fieldset': { borderColor: '#95D27F !important' },
                      width: '75%',
                    }}
                  />
                  <Button
                    color="success"
                    sx={{
                      height: '30px',
                      width: '20%',
                      fontSize: { md: '12px', xs: '8px' },
                    }}
                    variant="contained"
                  >
                    continue
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    color="success"
                    margin="normal"
                    required
                    name="Verification"
                    label="Email Verification Number"
                    type="number"
                    id="emailVerification"
                    sx={{
                      '&:hover fieldset': { borderColor: '#95D27F !important' },
                      width: '75%',
                    }}
                  />

                  <Button
                    sx={{
                      height: '30px',
                      width: '20%',
                      fontSize: { md: '12px', xs: '8px' },
                    }}
                    variant="contained"
                    color="success"
                  >
                    continue
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    color="success"
                    margin="normal"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{
                      '&:hover fieldset': { borderColor: '#95D27F !important' },
                      width: '75%',
                    }}
                  />

                  <Button
                    sx={{
                      height: '30px',
                      width: '20%',
                      fontSize: { md: '12px', xs: '8px' },
                    }}
                    variant="contained"
                    color="success"
                  >
                    continue
                  </Button>
                </Box>
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{
                mt: 3,
                mb: 2,
                background: theme.btn_yellow,
                fontFamily: theme.title_font,
              }}
            >
              Sign In
            </Button>

            <Box sx={{display:'flex' }}>
              <Typography color='#fff'>Already have an account?</Typography>
              <Link sx={{textDecoration:'none' , marginLeft:'10px' , color:theme.link_color}} variant="body2">
                Sign In
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainBox>
  );
}

export default SignUp;
