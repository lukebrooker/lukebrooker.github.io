import { createTokens } from 'tamagui'

const size = {
  0: 0,
  0.25: 2,
  0.5: 4,
  1: 8,
  1.5: 12,
  2: 16,
  2.5: 20,
  3: 24,
  4: 32,
  5: 40,
  true: 44,
  5.5: 44,
  6: 48,
  8: 64,
  10: 80,
  12: 96,
  16: 128,
  20: 160,
  24: 192
}

const spaces = Object.entries(size).map(([k, v]) => [k, v] as const)

const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k}`, -v])

const space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
} as any

const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
}

const radius = {
  ...size
}

export const sandColors = {
  sand1: 'hsl(60, 20%, 99%)',
  sand2: 'hsl(60, 8%, 97%)',
  sand3: 'hsl(30, 7%, 94%)',
  sand4: 'hsl(40, 6%, 91%)',
  sand5: 'hsl(45, 6%, 88%)',
  sand6: 'hsl(45, 5%, 85%)',
  sand7: 'hsl(48, 5%, 80%)',
  sand8: 'hsl(51, 5%, 72%)',
  sand9: 'hsl(60, 3%, 54%)',
  sand10: 'hsl(60, 2%, 50%)',
  sand11: 'hsl(60, 3%, 38%)',
  sand12: 'hsl(48, 8%, 12%)'
}

export const sandAColors = {
  sandA1: 'hsla(60, 100%, 17%, 0.01)',
  sandA2: 'hsla(60, 100%, 7%, 0.03)',
  sandA3: 'hsla(30, 100%, 6%, 0.06)',
  sandA4: 'hsla(41, 100%, 6%, 0.1)',
  sandA5: 'hsla(46, 100%, 6%, 0.13)',
  sandA6: 'hsla(46, 100%, 5%, 0.16)',
  sandA7: 'hsla(48, 100%, 5%, 0.21)',
  sandA8: 'hsla(50, 92%, 5%, 0.29)',
  sandA9: 'hsla(60, 100%, 3%, 0.47)',
  sandA10: 'hsla(60, 100%, 2%, 0.51)',
  sandA11: 'hsla(60, 100%, 2%, 0.63)',
  sandA12: 'hsla(50, 100%, 1%, 0.89)'
}

export const sandDarkColors = {
  sand1: 'hsl(60, 3%, 6%)',
  sand2: 'hsl(60, 2%, 10%)',
  sand3: 'hsl(60, 1%, 13%)',
  sand4: 'hsl(60, 2%, 16%)',
  sand5: 'hsl(60, 3%, 19%)',
  sand6: 'hsl(45, 4%, 22%)',
  sand7: 'hsl(48, 4%, 28%)',
  sand8: 'hsl(43, 4%, 37%)',
  sand9: 'hsl(47, 4%, 42%)',
  sand10: 'hsl(53, 3%, 47%)',
  sand11: 'hsl(45, 5%, 69%)',
  sand12: 'hsl(60, 6%, 93%)'
}

export const sandDarkAColors = {
  sandA1: 'hsla(0, 0%, 0%, 0)',
  sandA2: 'hsla(60, 4%, 95%, 0.04)',
  sandA3: 'hsla(60, 5%, 96%, 0.07)',
  sandA4: 'hsla(60, 85%, 97%, 0.11)',
  sandA5: 'hsla(60, 67%, 95%, 0.14)',
  sandA6: 'hsla(43, 100%, 96%, 0.18)',
  sandA7: 'hsla(47, 100%, 96%, 0.24)',
  sandA8: 'hsla(42, 100%, 96%, 0.34)',
  sandA9: 'hsla(46, 100%, 96%, 0.4)',
  sandA10: 'hsla(53, 100%, 97%, 0.45)',
  sandA11: 'hsla(44, 100%, 98%, 0.69)',
  sandA12: 'hsla(60, 100%, 100%, 0.93)'
}

export const limeColors = {
  lime0: '#fefffa',
  lime50: '#fcffe5',
  lime100: '#f6ffc8',
  lime200: '#ecff97',
  lime300: '#dbfc5a',
  lime400: '#caf336',
  lime500: '#a9d909',
  lime600: '#82ad03',
  lime700: '#628407',
  lime800: '#4f680c',
  lime900: '#415710',
  lime950: '#223102'
}

export const blueColors = {
  blue0: '#f4fbfb',
  blue50: '#ebfeff',
  blue100: '#cdf9ff',
  blue200: '#a1f1ff',
  blue300: '#60e4ff',
  blue400: '#18cdf8',
  blue500: '#00b0de',
  blue600: '#0094c6',
  blue700: '#086f96',
  blue800: '#105a7a',
  blue900: '#124b67',
  blue950: '#053047'
}

export const tokens = createTokens({
  color: {
    ...sandColors,
    ...sandAColors,
    ...sandDarkColors,
    ...sandDarkAColors,
    ...limeColors,
    ...blueColors
  },
  space,
  size,
  radius,
  zIndex
})
