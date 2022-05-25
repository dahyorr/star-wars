import { ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface Components {
    MUIDataTableFilter: {
      styleOverrides: {
        root: {
          backgroundColor: string;
        }
      }
    };
  }
}

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#ffc500',
    },
    background: {
      default: '#000000',
    }
  },
  typography: {
    fontFamily: 'BIZ UDPGothic, Roboto, sans-serif',
  },
  components: {
    MUIDataTableFilter: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        }
      }
    }
  }
}