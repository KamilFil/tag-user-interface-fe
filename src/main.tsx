
import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom/client';
import {StrictMode} from "react";


const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
