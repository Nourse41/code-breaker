import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#b30e17',
      },
      secondary: {
         main: '#6E63C6',
      },
      background: {
         paper: '#121212',
         default: '#000000',
      },
      red: {
         main: '##b30e17'
      },
      blue: {
         main: '#0d5ce3'
      }
   },
});

theme = responsiveFontSizes(theme);
export default theme;
