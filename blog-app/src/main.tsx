import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Theme, ThemePanel } from '@radix-ui/themes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme accentColor="blue" grayColor="gray">
        <App />
        {/* <ThemePanel /> */}
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
)
