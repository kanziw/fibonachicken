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

export const darcularTheme = createTheme(colors, {
  background: '#2B2B2B',
  text: '#A9B7C6',
  fill: '#A9B7C6',
})

export const vars = { ...global, colors }
