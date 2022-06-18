import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

globalStyle('body', {
  background: vars.colors.background,
  color: vars.colors.text,
})
