import { styled } from 'tamagui'

import { Paragraph } from '@/components/Paragraph'

export const Heading = styled(Paragraph, {
  tag: 'h2',
  name: 'Heading',
  accessibilityRole: 'header',
  fontFamily: '$heading',
  typescale: '$8',
  margin: 0,
  color: '$contrast',
  variants: {
    copy: {
      true: {
        marginTop: '1.5em'
      }
    }
  }
})

export const H1 = styled(Heading, {
  name: 'H1',
  tag: 'h1',
  typescale: '$10',
  fontFamily: '$display',
  $sm: {
    typescale: '$8'
  }
})

export const H2 = styled(Heading, {
  name: 'H2',
  tag: 'h2',
  typescale: '$8',
  fontFamily: '$display',
  $sm: {
    typescale: '$7'
  }
})

export const H3 = styled(Heading, {
  name: 'H3',
  tag: 'h3',
  typescale: '$7',
  fontFamily: '$display',
  $sm: {
    typescale: '$6'
  }
})

export const H4 = styled(Heading, {
  name: 'H4',
  tag: 'h4',
  typescale: '$5'
})

export const H5 = styled(Heading, {
  name: 'H5',
  tag: 'h5',
  typescale: '$4'
})

export const H6 = styled(Heading, {
  name: 'H6',
  tag: 'h6',
  typescale: '$4'
})
