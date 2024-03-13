import { Link as ExpoLink, Href } from 'expo-router'
import { styled, Text } from 'tamagui'

type Props = {
  href: Href<any>
  children: React.ReactNode
}

const StyledLink = styled(Text, {
  tag: 'a',
  position: 'relative',
  className: 'inherit-type link',
  animation: 'standard'
})

export const Link = ({ href, children }: Props) => (
  <ExpoLink
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    asChild
  >
    <StyledLink>{children}</StyledLink>
  </ExpoLink>
)
