import { YStack, Stack } from 'tamagui'
import { Paragraph } from '@/components/Paragraph'
import { Contact } from '@/components/Contact'
import { Strong } from '@/components/Strong'
import { Link } from '@/components/Link'

export const Footer = () => {
  const currentYear = new Date().toLocaleDateString('en-AU', {
    year: 'numeric'
  })
  return (
    <Stack
      backgroundColor='$faint'
      paddingVertical='$16'
      width={'100%'}
      alignItems='center'
    >
      <Stack
        gap='$8'
        maxWidth={1400}
        paddingHorizontal='$3'
        width={'100%'}
        tag='footer'
        $gtMd={{
          flexDirection: 'row'
        }}
      >
        <YStack gap='$4' flexShrink={1}>
          <Paragraph>
            <Strong>I'm Luke Brooker,</Strong> an entrepreneurial designer with
            experience in design, engineering, product, leadership, and
            community building. I love sharing ideas and insights, especially by
            personally connecting with those in the community.
          </Paragraph>
          <Paragraph typescale='$3'>
            Website carefully crafted with{' '}
            <Link href='https://expo.dev/'>Expo</Link> and{' '}
            <Link href='https://tamagui.dev/'>Tamagui</Link>. Source code
            available on{' '}
            <Link href='https://github.com/lukebrooker/lukebrooker.github.io'>
              Github
            </Link>
            .
          </Paragraph>
          <Paragraph typescale='$3' color='$subtle'>
            &copy; 2008 – {currentYear} Luke Brooker. All rights reserved.
          </Paragraph>
        </YStack>
        <Contact maxWidth={400} />
      </Stack>
    </Stack>
  )
}
