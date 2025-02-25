import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppDataContextProvider } from './components/AppDataProvider.tsx';
import { FileDropperContextProvider } from './components/FileDropperProvider';
import './index.css';
import createTheme from '@mui/material/styles/createTheme';

import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5361D9',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
      letterSpacing: '3px',
    },
    allVariants: {
      letterSpacing: '0.46px',
      lineHeight: 1.375,
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppDataContextProvider>
        <FileDropperContextProvider>
          <App />
        </FileDropperContextProvider>
      </AppDataContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
