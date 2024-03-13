import { Avatar as TuiAvatar, AvatarProps } from 'tamagui'
import { Text } from '@/components/Text'

export const Avatar = (props: AvatarProps) => {
  return (
    <TuiAvatar
      size='$20'
      circular
      borderColor='$default'
      borderWidth={2}
      {...props}
    >
      <TuiAvatar.Image
        src='/images/luke-brooker-profile.png'
        alt="It's me, Luke"
      />
      <TuiAvatar.Fallback
        backgroundColor='$soft'
        alignItems='center'
        justifyContent='center'
      >
        <Text>LB</Text>
      </TuiAvatar.Fallback>
    </TuiAvatar>
  )
}
