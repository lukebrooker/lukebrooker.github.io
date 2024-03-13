import { Avatar } from '@/components/Avatar'
import { Heading } from '@/components/Heading'
import { XStack, XStackProps } from 'tamagui'

export const Logo = (props: XStackProps) => {
  return (
    <XStack alignItems='center' gap='$1' {...props}>
      <Avatar size='$4' tag='' />
      <Heading
        tag='h2'
        typescale='$2'
        fontFamily='$display'
        style={{ lineHeight: '1em' }}
      >
        Luke
        <br />
        Brooker
      </Heading>
    </XStack>
  )
}
