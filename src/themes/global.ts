import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    'box-sizing': 'border-box',
    'max-width': '100%',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$background',
    color: '$white',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    color: 'inherit, sans-serif',
    'text-decoration': 'none',
  },

  '@media (prefers-color-scheme: dark)': {
    html: {
      'color-scheme': 'dark',
    },

    body: {
      color: '$background',
      background: '$white',
    },
  },
})
