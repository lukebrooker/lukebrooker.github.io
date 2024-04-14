import { H2 } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { Stack, YStack } from 'tamagui'
import { Href } from 'expo-router'
import { meta } from '@/Data'
import React from 'react'
import { Image } from '@/components/Image'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { Link } from '@/components/Link'
import { Strong } from '@/components/Strong'

type PostType = {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  image: string
}

type DataType = {
  title: string
  description: string
  date: string
  href: string
  tags: string[]
  image: string
}

// @ts-ignore Type added in build step
const mdxctx = require.context('../../../content/work', true, /\.(mdx|js)$/)

const { work } = meta

const posts = mdxctx
  .keys()
  .filter((i: string) => i.match(/\.js$/))
  .map((key: any) => mdxctx(key))

const POSTS = posts
  .map(({ title, date, slug, description, tags, image }: PostType) => ({
    title,
    description,
    date,
    tags,
    image,
    href: `/work/${slug}`
  }))
  .sort((a: { date: any }, b: { date: string }) => b.date.localeCompare(a.date))

export default function Work () {
  return (
    <>
      <PageHeader title={work.title} description={work.description} />
      <MainContainer gap='$8' maxWidth={1000}>
        <Paragraph>
          <Strong>Over my 15+ years</Strong> of product design experience, I’ve
          worked on countless projects, collaborating with many talented people.
          Over that time I’ve grown in many different areas. I’ve chosen a few
          projects that highlight some of my key strengths. Especially those
          that have evolved more recently.
        </Paragraph>
        <Paragraph>
          I’m happy to answer any questions or go deeper on any of these
          projects. Contact me at{' '}
          <Link href='mailto:mail@lukebrooker.com'>mail@lukebrooker.com</Link>.
        </Paragraph>
        {POSTS.map((post: DataType) => {
          return (
            <YStack
              gap='$2'
              padding='$2'
              key={post.href}
              borderColor='$thin'
              borderWidth={1}
              borderRadius='$3'
              $gtMd={{
                gap: '$4',
                padding: '$4'
              }}
            >
              <YStack flexShrink={1} gap='$2'>
                <Paragraph typescale='$3' color='$subtle'>
                  {post.tags.map((tag, i) => (
                    <span key={tag}>
                      <span>{tag}</span>
                      <span>{i < post.tags.length - 1 ? ' · ' : ''}</span>
                    </span>
                  ))}
                </Paragraph>
                <H2 typescale='$6'>
                  <Link
                    key={post.href}
                    href={post.href as Href<any>}
                    type='ghost'
                  >
                    {post.title}
                  </Link>
                </H2>
              </YStack>
              <Link key={post.href} href={post.href as Href<any>}>
                <Image src={post.image} alt={`${post.title} image`} />
              </Link>
              <Paragraph>{post.description}</Paragraph>
            </YStack>
          )
        })}
        <Paragraph>
          More work coming soon.
        </Paragraph>
      </MainContainer>
    </>
  )
}
