import { theme } from '../js/theme.js';

export function styleSignUp(isEmail, isValidEmail, ispassword) {
  const style = {
    containerBox: {
      width: { md: '50%', xs: '100%' },
      marginTop: '10%',
    },
    container: {
      width: '100%',
      height: '100%',
      padding: '60px',
      background: { md: theme.pop_color, xs: 'none' },
      borderRadius: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    contentBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '80%',
      justifyContent: 'space-around',
    },
    inputBox: {
      '& label': {
        color: '#fff',
        top: '-5px',
      },
      '& input': {
        color: '#fff',
        height: '10px !important',
      },
      '& p': {
        color: '#ff0000',
      },
      width: '100%',
    },
    configue: {
      height: '30px',
      width: { md: '20%', xs: '100%' },
      fontSize: { md: '12px', xs: '8px' },
      color: '#fff !important',
    },
    configue01: {
      background: isEmail && isValidEmail ? ' #95D27F !important' : '#ff0000 !important',
      border:
        isEmail && isValidEmail ? 'solid 1px #95D27F !important' : 'solid 1px #ff0000 !important',
    },

    configue02: {
      background: ispassword ? ' #95D27F !important' : '#ff0000 !important',
      border: ispassword ? 'solid 1px #95D27F !important' : 'solid 1px #ff0000 !important',
    },
  };
  return [style];
}

export default styleSignUp;
