import { Box, TextField, Container, Avatar, Button, Link, Typography } from '@mui/material';
import { theme, MainBox } from '../js/theme.js';
import {
  useIsValidation,
  useEmailDuplicate,
  useEndTyping,
  useClick,
  useIsHuman,
  useSignUp
} from './useSignUp.js';
import Typed from 'react-typed';
import styleSignUp from './styleSignUp.js';
import ReCAPTCHA from 'react-google-recaptcha';


function SignUp() {
  const [endTyping] = useEndTyping();
  const [handleInputEmail, handleInputPassword, email, isEmail,password ,  ispassword] = useIsValidation();
  const [isValidEmail] = useEmailDuplicate(email, isEmail);
  const [style] = styleSignUp(isEmail, isValidEmail, ispassword);
  const [isClickEmailContinue, handleEmailClick, isClickPwdContinue, handlePwdClick] = useClick();
  const [handleCaptchaResponse, isHuman] = useIsHuman();
  const [handleSubmit] = useSignUp(ispassword , isEmail , isHuman , isValidEmail , email , password);

  return (
    <MainBox>
      <Box id="header" sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <Link href="/">
          <Avatar
            alt="logo"
            src="/img/single_logo.png"
            sx={{ mb: 3, width: 80, height: 80 }}
            variant="square"
          ></Avatar>
        </Link>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <Typography color="#fff">Already have an account?</Typography>
          <Link
            href="#/signIn"
            sx={{ textDecoration: 'none', marginLeft: '10px', color: theme.link_color }}
            variant="body2"
          >
            Sign In
          </Link>
        </Box>
      </Box>
      <Box id="container" component='form' onSubmit={handleSubmit}  sx={style.containerBox}>
        <Container component="main" maxWidth="xs" sx={style.container}>
          <Box id="content" sx={style.contentBox}>
            <Typed
              style={{
                color: '#95D27F',
                width: '100%',
                margin: '10px 0 10px 0',
                fontSize: '20px',
                fontFamily: theme.title_font,
                marginBottom: '30px',
              }}
              strings={['welcom to Study <br> Let’s begin the study']}
              typeSpeed={80}
            />
            {/* inputBox : *email */}
            <Box
              sx={{
                ...style.inputBox,
                display: {
                  xs: endTyping ? 'blcok' : 'none',
                  md: endTyping ? 'flex' : 'none',
                },
              }}
            >
              <TextField
                color={(!isEmail || (isValidEmail === undefined) || !isValidEmail) ? 'error' : 'success'}
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputEmail}
                helperText={isValidEmail || isValidEmail === undefined ? '' : '중복된 아이디입니다.'}
                sx={{
                  width: '100%',
                  '& fieldset': {
                    borderColor:
                    (!isEmail || (isValidEmail === undefined) || !isValidEmail) ? '#ff0000' : '#95D27F',
                  },
                  '&:hover fieldset': {
                    borderColor:
                    (!isEmail || (isValidEmail === undefined) || !isValidEmail)
                        ? '#ff0000 !important'
                        : '#95D27F !important',
                  },
                }}
              />
              <Button
                sx={{
                  ...style.configue,
                  ...style.configue01,
                  top: '22px',
                }}
                variant="contained"
                disabled={!isEmail || isValidEmail === undefined || !isValidEmail}
                onClick={handleEmailClick}
              >
                Contained
              </Button>
            </Box>
            {/* inputBox : *password */}
            <Box
              sx={{
                ...style.inputBox,
                display: {
                  xs: isClickEmailContinue ? 'blcok' : 'none',
                  md: isClickEmailContinue ? 'flex' : 'none',
                },
                marginTop: {
                  xs: '30px',
                  md: '0px',
                },
              }}
            >
              <TextField
                color={!ispassword ? 'error' : 'success'}
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  width: '100%',
                  '& fieldset': {
                    borderColor: !ispassword ? '#ff0000' : '#95D27F',
                  },
                  '&:hover fieldset': {
                    borderColor: !ispassword ? '#ff0000 !important' : '#95D27F !important',
                  },
                }}
                helperText={!ispassword ? '소문자 + 숫자 + 특수문자 @$!%*?& (8 ~ 20자) ' : ''}
                onChange={handleInputPassword}
              />
              <Button
                sx={{
                  ...style.configue,
                  ...style.configue02,
                  top: '22px',
                }}
                variant="contained"
                disabled={!ispassword}
                onClick={handlePwdClick}
              >
                Contained
              </Button>
            </Box>

            {/* google : *ReCAPTCHA */}

            {isClickPwdContinue && showRecaptcha(handleCaptchaResponse)}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{
                display: isHuman ? 'block' : 'none',
                fontFamily: theme.title_font,
                background: !isEmail || !ispassword ? '#ff0000 !important' : ' #FCD24F !important',
                border:
                  !isEmail || !ispassword
                    ? 'solid 1px #ff0000 !important'
                    : 'solid 1px #95D27F !important',
              }}
              disabled={!isEmail || !ispassword || !isHuman}
            >
              Sign In
            </Button>
          </Box>
        </Container>
      </Box>
    </MainBox>
  );
}

function showRecaptcha(handleCaptchaResponse) {
  console.log('showRecaptcha 진입');
  return (
    <Box sx={{ margin: {xs:'50px', md:'20px'}}}>
      <ReCAPTCHA
        sitekey="6LdZNdElAAAAAIwLK4P47_NA7DIMidAmzGSOwHVy"
        onChange={handleCaptchaResponse}
      />
    </Box>
  );
}

export default SignUp;
