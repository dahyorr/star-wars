import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import {theme} from 'helpers/theme'

const muiTheme = createTheme(theme)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <SnackbarProvider>
        <CssBaseline/>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);