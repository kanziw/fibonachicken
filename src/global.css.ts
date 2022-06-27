import { globalStyle } from '@vanilla-extract/css'

// https://shylog.com/settings-for-a-more-complete-webview/
globalStyle('*:not(input)', {
  WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
  userSelect: 'none',
  WebkitTouchCallout: 'none',
})

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

globalStyle('html, body, #root', {
  height: '100%',
})

globalStyle('html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video', {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: 'inherit',
  verticalAlign: 'baseline',
  fontFamily: '-apple-system, BlinkMacSystemFont, \'Apple SD Gothic Neo\', Pretendard, Roboto, \'Noto Sans KR\', \'Segoe UI\', \'Malgun Gothic\', \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', sans-serif',
})

globalStyle('article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section', {
  display: 'block',
})

globalStyle('body', {
  lineHeight: 1,
})

globalStyle('ol, ul', {
  listStyle: 'none',
})

globalStyle('blockquote, q', {
  quotes: 'none',
})

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: 'none',
})

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

globalStyle('a', {
  color: 'inherit',
})
