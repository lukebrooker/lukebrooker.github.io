import { createFont } from 'tamagui'

const inherit = 'inherit'

export const typescale = {
  1: 13,
  2: 16,
  3: 18,
  4: 21,
  5: 24,
  6: 28,
  7: 32,
  8: 36,
  9: 42,
  10: 48,
  sm1: 13,
  sm2: 16,
  sm3: 18,
  sm4: 21,
  sm5: 24,
  sm6: 28,
  sm7: 32,
  sm8: 36,
  sm9: 42,
  sm10: 48,
  md1: 13,
  md2: 16,
  md3: 19,
  md: 19,
  md4: 23,
  md5: 28,
  md6: 34,
  md7: 42,
  md8: 52,
  md9: 64,
  md10: 78,
  lg1: 13,
  lg2: 16,
  lg3: 20,
  lg4: 25,
  lg5: 32,
  lg6: 40,
  lg7: 48,
  lg8: 62,
  lg9: 76,
  lg10: 96
}

function getLineheight (ratio: number) {
  return Object.entries(typescale).reduce((acc, [key, value]) => {
    // if (key === 'inherit') return acc
    acc[key as keyof typeof acc] = Math.round(Number(value) * ratio * 10) / 10
    return acc
  }, {} as Record<string, number>)
}

const lineHeightParagraph = getLineheight(1.6)
const lineHeightDisplay = getLineheight(1.2)
const lineHeightUI = getLineheight(1.35)

export const fonts = {
  body: createFont({
    family: `Outfit`,
    size: typescale,
    letterSpacing: {},
    weight: {
      3: '300',
      4: '400',
      7: '700'
    },
    lineHeight: lineHeightUI,
    face: {
      300: { normal: 'OutfitLight' },
      700: { normal: 'OutfitBold' }
    }
  }),
  paragraph: createFont({
    family: `Outfit`,
    size: typescale,
    letterSpacing: {},
    weight: {
      3: '300',
      4: '400',
      7: '700'
    },
    lineHeight: lineHeightParagraph,
    face: {
      300: { normal: 'OutfitLight' },
      700: { normal: 'OutfitBold' }
    }
  }),
  paragraphBold: createFont({
    family: `OutfitBold`,
    size: typescale,
    letterSpacing: {},
    weight: {
      7: '700'
    },
    lineHeight: lineHeightParagraph
  }),
  paragraphLight: createFont({
    family: `OutfitLight`,
    size: typescale,
    letterSpacing: {},
    weight: {
      3: '300'
    },
    lineHeight: lineHeightParagraph
  }),
  ui: createFont({
    family: `Outfit`,
    size: typescale,
    letterSpacing: {},
    weight: {
      3: '300',
      4: '400',
      7: '700'
    },
    lineHeight: lineHeightUI,
    face: {
      300: { normal: 'OutfitLight' },
      700: { normal: 'OutfitBold' }
    }
  }),
  uiBold: createFont({
    family: `OutfitBold`,
    size: typescale,
    letterSpacing: {},
    weight: {
      7: '700'
    },
    lineHeight: lineHeightUI
  }),
  display: createFont({
    family: `ClimateCrisis`,
    size: typescale,
    letterSpacing: {},
    lineHeight: lineHeightDisplay,
    weight: {
      9: '900'
    }
  }),
  heading: createFont({
    family: `OutfitBold`,
    size: typescale,
    letterSpacing: {},
    lineHeight: lineHeightDisplay,
    weight: {
      7: '700'
    }
  })
}
