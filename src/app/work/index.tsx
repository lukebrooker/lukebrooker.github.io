import { H2 } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { Stack, YStack } from 'tamagui'
import { Href } from 'expo-router'
import { meta } from '@/Data'
import React from 'react'
import { Image } from '@/components/Image'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { FormattedDate } from '@/components/FormattedDate'
import { Link } from '@/components/Link'

type PostType = {
  title: string
  description: string
  date: string
  slug: string
  teaserImage: string
}

type DataType = {
  title: string
  description: string
  date: string
  href: string
  teaserImage: string
}

// @ts-ignore Type added in build step
const mdxctx = require.context('../../../work', true, /\.(mdx|js)$/)

const { work } = meta

const posts = mdxctx
  .keys()
  .filter((i: string) => i.match(/\.js$/))
  .map((key: any) => mdxctx(key))

const POSTS = posts
  .map(({ title, date, slug, description, teaserImage }: PostType) => ({
    title,
    description,
    date,
    teaserImage: `/work/${slug}/${teaserImage}`,
    href: `/work/${slug}`
  }))
  .sort((a: { date: any }, b: { date: string }) => b.date.localeCompare(a.date))

export default function Work () {
  return (
    <>
      <PageHeader title={work.title} description={work.description} />
      <MainContainer gap='$8' maxWidth={1200}>
        <Paragraph>
          If you're viewing this, you're seeing it while I'm currently working
          on adding new pages.
        </Paragraph>
        <Paragraph>
          <Link href='mailto:mail@lukebrooker.com'>Get in contact</Link> if you
          would like to see some work from me privately in the meantime.
        </Paragraph>
        {POSTS.map((post: DataType) => {
          return (
            <Stack
              gap='$2'
              key={post.href}
              borderTopColor='$thin'
              borderTopWidth={1}
              paddingTop='$8'
              $gtMd={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: '$4'
              }}
            >
              <YStack
                $gtMd={{
                  width: '40%'
                }}
              >
                <Link key={post.href} href={post.href as Href<any>}>
                  <Image src={post.teaserImage} alt={`${post.title} image`} />
                </Link>
              </YStack>
              <YStack
                flexShrink={1}
                gap='$2'
                $gtMd={{
                  width: '60%'
                }}
              >
                <FormattedDate date={post.date} />
                <H2 fontFamily='$heading' typescale='$7'>
                  <Link key={post.href} href={post.href as Href<any>}>
                    {post.title}
                  </Link>
                </H2>
                <Paragraph>{post.description}</Paragraph>
              </YStack>
            </Stack>
          )
        })}
      </MainContainer>
    </>
  )
}
