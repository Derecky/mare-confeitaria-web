import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors } from '../../themes/colors'
import { fontSizes } from '../../themes/font-sizes'
import { fontWeights } from '../../themes/font-weights'
import { lineHeights } from '../../themes/line-heights'
import { radii } from '../../themes/radii'
import { space } from '../../themes/space'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
