import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from "@mui/material";
import theme from "./assets/Theme/Theme.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </>,
)
