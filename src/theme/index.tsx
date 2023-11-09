import { createTheme } from '@mui/material/styles';

const font = "'Manrope', sans-serif"; 

export const textColor = {
  primary: '#F5F5F5',
  secondary: '#101010'
};

export const colors = {
  black: '#101010',
  orange: '#FF9C31'
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#003DC4",
    },
    secondary: {
      main: '##FFF',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#003DC4',
    },
    background: {
      default: '#FFF',
      paper: '#FFF'
    }
  },
  typography:{
    fontFamily: font
  }
});


export default theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
