import { Link as ExpoLink, Href } from 'expo-router'
import { styled, Text } from 'tamagui'

type Props = {
  href: Href<any>
  type?: 'default' | 'ghost'
  children: React.ReactNode
}

const StyledLink = styled(Text, {
  tag: 'a',
  position: 'relative',
  className: '',
  animation: 'standard',
})

const typeClasses = {
  default: 'link',
  ghost: 'link-ghost',
}

export const Link = ({ href, children, type = 'default' }: Props) => (
  <ExpoLink
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    asChild
  >
    <StyledLink className={`${typeClasses[type]} inherit-type`}>{children}</StyledLink>
  </ExpoLink>
)
