import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Button,
} from '@mui/material';
import { theme, MainBox } from './js/theme.js';

function SignIn(props) {
  const th = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <MainBox>
      <Box
        sx={{
          width: { md: '50%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop:'10%'
        }}
      >
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              width: '100%',
              height: '550px',
              background: {md:theme.pop_color , xs:'none'},
              opacity:'70%',
              borderRadius: '20px',
              boxSizing:'border-box',
              display:'flex',
              justifyContent:'center',
              flexDirection:'column'
              
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height:'80%'
              }}
            >
              <Avatar  alt="logo" src="/img/single_logo.png" sx={{ mb:3, width: 80, height: 80 }}variant="square">
              </Avatar>
              <Box
                onSubmit={handleSubmit}
                sx={{'& fieldset' : {
                  borderColor:'#fff'
                }
                , '& label' : {
                  color:'#fff'
                }
                , '& input' :{
                  color:'#fff',
                }
                ,
              }}
              >
                <TextField
                  color="success"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{'&:hover fieldset':{borderColor:'#95D27F !important'}}}
                />
                <TextField
                  color="success"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{'&:hover fieldset':{borderColor:'#95D27F !important'}}}
                />
                <FormControlLabel
                  control={<Checkbox value="remember"
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    }
                  }}
                  />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 , background:theme.btn_yellow , fontFamily:theme.title_font}}
                >
                  Sign In
                </Button>
                <Grid container sx={{ '& a':{color:theme.link_color} }}>
                  <Grid item xs >
                    <Link href="#" variant="body2" >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item >
                    <Link href="#" variant="body2">
                      Create an account.
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
      </Box>
    </MainBox>
  );
}

export default SignIn;
