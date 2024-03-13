import { styled, View } from 'tamagui'
import { Paragraph } from '@/components/Paragraph'

export const ListItem = styled(Paragraph, {
  name: 'ListItem',
  tag: 'li',
  style: {
    display: 'list-item'
  },
  $sm: {
    marginLeft: '$2.5'
  }
})

export const UnorderedList = styled(View, {
  name: 'UnorderedList',
  tag: 'ul',
  gap: '$1',
  style: {
    listStyleType: 'disc'
  }
})

export const OrderedList = styled(View, {
  name: 'OrderedList',
  tag: 'ol',
  gap: '$1',
  style: {
    listStyleType: 'decimal'
  }
})

export const DefinitionList = styled(View, {
  name: 'DefinitionList',
  tag: 'dl',
  gap: '$0.5',
  flexDirection: 'row',
  flexWrap: 'wrap'
})

export const DefinitionTerm = styled(Paragraph, {
  name: 'DefinitionTerm',
  tag: 'dt',
  color: '$subtle',
  typescale: '$3',
  flexBasis: '20%',
  minWidth: 100
})

export const DefinitionDescription = styled(Paragraph, {
  name: 'DefinitionDescription',
  tag: 'dd',
  typescale: '$3',
  flexBasis: '60%'
})
