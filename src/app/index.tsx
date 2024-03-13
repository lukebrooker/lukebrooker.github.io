import { Stack, XStack, YStack, Button, Header, Section, styled } from 'tamagui'
import { ScrollView } from 'react-native'
import { MoveDown } from '@tamagui/lucide-icons'
import { useRef } from 'react'
import { Href, Link } from 'expo-router'
import { H1, H2, H4 } from '@/components/Heading'
import { Strong } from '@/components/Strong'
import { Paragraph } from '@/components/Paragraph'
import { NavIcon, NavIconsType } from '@/components/Nav/Icon'
import { Avatar } from '@/components/Avatar'
import { meta, MetaType } from '@/Data'

const LeadParagraph = styled(Paragraph, {
  name: 'LeadParagraph',
  textAlign: 'center',
  maxWidth: 500,
  $sm: {
    typescale: '$3'
  }
})

const NavCard = styled(YStack, {
  name: 'NavCard',
  tag: 'a',
  acceptsClassName: true,
  backgroundColor: '$background',
  borderColor: '$thin',
  borderWidth: 1,
  borderRadius: '$1',
  padding: '$2',
  gap: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 140,
  flexBasis: 160,
  flexGrow: 1,
  flexShrink: 1,
  animation: 'bouncy',
  hoverStyle: {
    borderColor: '$lime500',
    scale: 1.05
  }
})

const NavCardHeading = styled(H4, {
  name: 'NavCardHeading',
  tag: 'h3',
  typescale: '$2',
  textAlign: 'center',
  $gtMd: {
    typescale: '$3'
  }
})

const NavCardDescription = styled(Paragraph, {
  name: 'NavCardDescription',
  textAlign: 'center',
  typescale: '$1',
  color: '$subtle',
  $gtMd: {
    typescale: '$2'
  }
})

export default function Home () {
  const scrollRef = useRef<ScrollView>(null)

  return (
    <ScrollView
      snapToInterval={900}
      snapToAlignment='start'
      decelerationRate='fast'
      showsVerticalScrollIndicator={true}
      ref={scrollRef}
    >
      <Stack $gtMd={{ flexDirection: 'row' }} backgroundColor='$background'>
        <YStack
          flexGrow={1}
          flexShrink={0}
          alignItems='center'
          justifyContent='center'
          gap='$5'
          paddingHorizontal='$4'
          paddingVertical='$8'
          minHeight='70vh'
          $gtMd={{ minHeight: '100vh', flexBasis: '50%' }}
        >
          <Header gap='$2' alignItems='center'>
            <Avatar />
            <H1 typescale='$6' textAlign='center'>
              Hi, I’m Luke
            </H1>
          </Header>
          <Section gap='$3'>
            <LeadParagraph>
              An <Strong>entrepreneurial designer</Strong> with experience
              across engineering, product, leadership, and community building.
            </LeadParagraph>
            <LeadParagraph>
              I thrive on blending these disciplines to craft innovative
              solutions that enrich lives.
            </LeadParagraph>
            <LeadParagraph>
              How? By{' '}
              <Strong>
                collaborating with a highly connected and motivated team
              </Strong>
              .
            </LeadParagraph>
          </Section>
          <Button
            onPress={() => scrollRef?.current?.scrollToEnd({ animated: true })}
            chromeless
            circular
            size='$6'
            height='$6'
            icon={<MoveDown size='$4' />}
            aria-label='Scroll for more'
            enterStyle={{
              scale: 2,
              y: -150,
              opacity: 0
            }}
            animation='bouncy'
            $gtMd={{
              display: 'none'
            }}
          />
        </YStack>
        <YStack
          flexGrow={1}
          flexShrink={0}
          alignItems='center'
          minHeight='100vh'
          justifyContent='center'
          gap='$5'
          paddingHorizontal='$3'
          backgroundColor='$soft'
          paddingTop='$4'
          paddingBottom='$10'
          $gtMd={{
            paddingVertical: '$8',
            minHeight: '100vh',
            flexBasis: '50%'
          }}
        >
          <YStack alignItems='center' gap='$2'>
            <H2
              fontFamily='$display'
              typescale='$5'
              textAlign='center'
              maxWidth={400}
            >
              Want to learn more about me?
            </H2>
            <Paragraph textAlign='center'>Explore these links</Paragraph>
          </YStack>
          <XStack
            flexWrap='wrap'
            alignItems='stretch'
            justifyContent='center'
            gap='$2'
            maxWidth={376}
          >
            {Object.entries(meta as MetaType)
              .filter(([key]) => key !== 'home')
              .map(
                ([key, { urlPath, icon, title, description, status }]) =>
                  status === 'published' && (
                    <Link href={urlPath as Href<any>} asChild key={key}>
                      <NavCard>
                        <NavIcon icon={icon as keyof NavIconsType} />
                        <NavCardHeading>{title}</NavCardHeading>
                        <NavCardDescription>{description}</NavCardDescription>
                      </NavCard>
                    </Link>
                  )
              )}
          </XStack>
        </YStack>
      </Stack>
    </ScrollView>
  )
}
