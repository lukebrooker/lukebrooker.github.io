import { styled } from 'tamagui'
import { Text } from '@/components/Text'

export const Paragraph = styled(Text, {
  fontFamily: '$paragraph',
  name: 'Paragraph',
  tag: 'p',
  userSelect: 'auto',
  typescale: '$4'
})
