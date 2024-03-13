import { YStack, styled } from 'tamagui'

export const PageContainer = styled(YStack, {
  name: 'PageContainer',
  paddingTop: '$16',
  alignItems: 'center',
  gap: '$16',
  $gtMd: {
    gap: '$24',
    paddingTop: '$24'
  }
})
