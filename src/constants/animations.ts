import { createAnimations } from '@tamagui/animations-css'

export const animations = createAnimations({
  lazy: 'ease-out 500ms',
  standard: 'ease-out 200ms',
  quick: 'ease-out 100ms',
  bouncy: 'cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms'
})
