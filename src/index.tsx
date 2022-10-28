import './global.css'

import { ThemeProvider } from 'next-themes'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { bridge } from './karrotmini'
import reportWebVitals from './reportWebVitals'
import { darcularTheme, darkTheme, lightTheme } from './styles/vars.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

bridge.ready().then(() => {
  root.render(
    <React.StrictMode>
      <ThemeProvider
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
          darcular: darcularTheme,
        }}
        defaultTheme={window.matchMedia('(prefers-color-scheme: dark)').matches ? 'darcular' : 'light'}
      >
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
