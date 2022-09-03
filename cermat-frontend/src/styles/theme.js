import { createTheme, responsiveFontSizes } from '@mui/material';
import { blue } from '@mui/material/colors';

// eslint-disable-next-line no-unused-vars
const Colors = {
  primary: '#00adb5',
  secondary: '#95defb',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '*#333',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_blue: '#f0f6f7',

  ///
  // Solid Color
  ///

  white: '#fff',
  black: '#000',
};

const mode = createTheme({
  typography: {
    h6: {
      color: blue,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    // mode: 'dark',
    primary: {
      main: Colors.black,
    },
    secondary: {
      main: Colors.white,
    },
  },
  //   components: {},
  //   mixins: {},
});

export default responsiveFontSizes(mode);
