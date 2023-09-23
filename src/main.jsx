import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'

const pallete = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#169AD7',
    },
    secondary: {
      main: '#F58220',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <ThemeProvider theme={pallete}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
)
