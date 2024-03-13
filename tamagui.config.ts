import { createTamagui } from '@tamagui/core'
import { shorthands } from '@tamagui/shorthands'

import { animations } from './src/constants/animations'
import { fonts } from './src/constants/fonts'
import { media } from './src/constants/media'
import { themes } from './src/constants/themes'
import { tokens } from './src/constants/tokens'

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens,
  media
})

type AppConfig = typeof config

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so that custom types
  // work everywhere `tamagui` is imported
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    groupNames(): 'link' | 'navlink'
  }
}

export default config
