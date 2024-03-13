import { XStack, View, styled, XStackProps, YStack } from 'tamagui'
import { Href, Link, usePathname } from 'expo-router'
import { NavIcon, NavIconsType } from '@/components/Nav/Icon'
import { Logo } from '@/components/Logo'
import { Text } from '@/components/Text'
import { meta, MetaType } from '@/Data'
import { getCurrentPath } from '@/utils/getCurrentPath'

const NavBar = styled(XStack, {
  name: 'NavBar',
  tag: 'nav',
  className: 'sticky-mobile-nav',
  backgroundColor: '$background',
  alignSelf: 'center',
  style: {
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)'
  },
  $md: {
    zIndex: 10,
    shadowColor: '$faint',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  $gtMd: {
    width: '100%',
    maxWidth: 1400,
    paddingHorizontal: '$3'
  }
})

const NavItems = styled(XStack, {
  name: 'NavItems',
  tag: 'ul',
  width: '100vw',
  justifyContent: 'space-around',
  paddingVertical: '$1',
  $gtMd: {
    width: '100%',
    paddingVertical: '$2',
    justifyContent: 'center',
    gap: '$1'
  }
})

const NavItem = styled(XStack, {
  name: 'NavItem',
  tag: 'li',
  alignItems: 'center'
})

const StyledLink = styled(Text, {
  tag: 'a',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$ui',
  typescale: '$1',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$0.25',
  padding: '$1',
  minWidth: '$8',
  minHeight: '$7',
  color: '$subtle',
  // Needed to fix a layout bug when using Tamagui groups
  className: 'container-type-normal',
  $gtMd: {
    paddingHorizontal: '$1',
    paddingVertical: '$1',
    minWidth: '0',
    minHeight: '0',
    typescale: '$2'
  },
  hoverStyle: {
    color: '$blue800'
  },
  variants: {
    active: {
      true: {
        color: '$blue800'
      }
    }
  } as const
})

const LinkActiveHighlight = styled(View, {
  tag: 'span',
  height: '100%',
  left: 0,
  right: 0,
  zIndex: 0,
  opacity: 0,
  position: 'absolute',
  bottom: '0',
  transformOrigin: 'center',
  animation: 'standard',
  borderRadius: '$1',
  $gtMd: {
    backgroundColor: '$blue100',
    transformOrigin: 'bottom',
    borderRadius: 0
  },
  variants: {
    hovered: {
      true: {
        opacity: 1,
        scaleY: 1
      }
    },
    active: {
      true: {
        scaleY: 1,
        opacity: 1,
        $gtMd: {
          scaleY: 0.1,
          backgroundColor: '$blue700'
        }
      },
      false: {
        scaleY: 0
      }
    }
  } as const,
  defaultVariants: {
    active: false
  }
})

type NavLinkProps = {
  href: Href<any>
  children: React.ReactNode
  active: boolean
}

const NavLink = ({ href, children, active }: NavLinkProps) => (
  <Link
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    asChild
  >
    <StyledLink group='navlink' active={active}>
      {children}
      <LinkActiveHighlight
        active={active}
        $group-navlink-hover={{ hovered: true }}
      />
    </StyledLink>
  </Link>
)

const NavText = styled(Text, {
  name: 'NavText',
  className: 'inherit-type',
  zIndex: 1
})

export const Nav = (props: XStackProps) => {
  const pathname = usePathname()
  return (
    <NavBar {...props}>
      <Link href='/' style={{ position: 'absolute', zIndex: 10 }}>
        <Logo
          href='/'
          tag='span'
          display='none'
          $gtMd={{ display: 'flex', paddingVertical: '$2' }}
        />
      </Link>
      <NavItems>
        {Object.entries(meta as MetaType)
          .filter(([key]) => key !== 'home')
          .map(
            ([key, { urlPath, icon, shortTitle, title, status }]) =>
              status === 'published' && (
                <NavItem key={key}>
                  <NavLink
                    href={urlPath as Href<any>}
                    key={key}
                    active={urlPath === getCurrentPath(pathname)}
                  >
                    <View tag='span' zIndex={1} $gtMd={{ display: 'none' }}>
                      <NavIcon icon={icon as keyof NavIconsType} />
                    </View>
                    <NavText $gtMd={{ display: 'none' }}>
                      {shortTitle || title}
                    </NavText>
                    <NavText display='none' $gtMd={{ display: 'flex' }}>
                      {title}
                    </NavText>
                  </NavLink>
                </NavItem>
              )
          )}
      </NavItems>
    </NavBar>
  )
}
