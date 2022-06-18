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
})

export const lightTheme = createTheme(colors, {
  background: 'white',
  text: 'black',
})

export const darkTheme = createTheme(colors, {
  background: 'black',
  text: 'white',
})

export const vars = { ...global, colors }
