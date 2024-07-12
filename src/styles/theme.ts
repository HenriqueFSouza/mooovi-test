'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    text: {
      primary: "#4D4D4D",
      secondary: '#AFAFAF'
    },
    primary: {
      main: '#133A6F',
    },
    info: {
      main: "#03D69D",
    }
  },
  typography: {
    fontFamily: 'inherit',
    allVariants: {
      color: "#4D4D4D"
    }
  }
});

export default theme;