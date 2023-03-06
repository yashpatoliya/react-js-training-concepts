import { createTheme } from '@mui/material/styles';
// import {amber  } from '@mui/material/colors';

const theme = createTheme({
    overrides: {
        Tab: {
          root: {
            borderRadius: 20,
          },
          contained: {
            boxShadow: 'none',
          },
        },
      },
    palette : {
        primary : {
            main:'#000031',
        },
        white : {
            main : '#fff'
        }
    },
    typography: {
        fontFamily: 'Arial',
        palette : {
            primary : {
                main:'#fff',
            },
            white : {
                main : '#fff'
            }
        }
      },
      
})
export default theme;