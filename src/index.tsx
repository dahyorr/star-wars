import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import {theme} from 'helpers/theme'
import GlobalStyles from '@mui/material/GlobalStyles';

const muiTheme = createTheme(theme)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <SnackbarProvider>
        <CssBaseline/>
        <GlobalStyles 
          styles={{
            '*':{
              scrollBehavior: 'smooth',
            },
            '*::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
              borderRadius: '8px',
              backgroundColor: `rgba(255,255,255,0.4)`,
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: `#999`,
              borderRadius: '6px',
            }
          }}
        />
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);