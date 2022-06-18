import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

const global = createGlobalTheme('html', {
  space: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
})

const colors = createThemeContract({
  background: null,
  text: null,
  fill: null,
})

export const lightTheme = createTheme(colors, {
  background: 'white',
  text: 'black',
  fill: 'black',
})

export const darkTheme = createTheme(colors, {
  background: 'black',
  text: 'white',
  fill: 'white',
})

// https://github.com/kevinvn1709/vscode-dracula-color-theme/blob/a50f875631175ff53edea1b342fb1dcbb82f928c/themes/dracula-color-theme.json
export const darcularTheme = createTheme(colors, {
  background: '#2B2B2B',
  text: '#D4D4D4',
  fill: '#D4D4D4',
})

export const vars = { ...global, colors }
