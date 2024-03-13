import { createSoftenMask, createThemeBuilder } from '@tamagui/theme-builder'

import {
  sandColors,
  sandDarkColors,
  limeColors,
  blueColors,
  sandAColors,
  sandDarkAColors
} from './tokens'

const themesBuilder = createThemeBuilder()
  .addPalettes({
    light: Object.values(sandColors),
    lightTransparent: Object.values(sandAColors),
    dark: Object.values(sandDarkColors),
    darkTransparent: Object.values(sandDarkAColors),
    accent: Object.values(limeColors),
    note: Object.values(blueColors)
  })
  .addTemplates({
    base: {
      background: 0,
      faint: 1,
      soft: 2,
      thin: 5,
      muted: -3,
      subtle: -2,
      default: -1,
      contrast: -0,
      color: -0
    }
  })
  .addMasks({
    soften: createSoftenMask()
  })
  .addThemes({
    light: {
      template: 'base',
      palette: 'light'
    },
    lightTransparent: {
      template: 'base',
      palette: 'light'
    },
    dark: {
      template: 'base',
      palette: 'dark'
    },
    darkTransparent: {
      template: 'base',
      palette: 'dark'
    },
    accent: {
      template: 'base',
      palette: 'accent'
    },
    note: {
      template: 'base',
      palette: 'note'
    }
  })

export const themes = themesBuilder.build()
