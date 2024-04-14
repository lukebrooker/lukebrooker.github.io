import { H2 } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { YStack } from 'tamagui'
import { Href } from 'expo-router'
import { meta } from '@/Data'
import React from 'react'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { FormattedDate } from '@/components/FormattedDate'
import { Link } from '@/components/Link'
import { PageContainer } from '@/components/PageContainer'

type PostType = {
  title: string
  description: string
  date: string
  slug: string
  status: 'draft' | 'restricted' | 'published'
}

type DataType = {
  title: string
  description: string
  date: string
  href: string
  status: 'draft' | 'restricted' | 'published'
}

// @ts-ignore Type added in build step
const mdxctx = require.context('../../../content/writing', true, /\.(mdx|js)$/)

const { writing } = meta

const posts = mdxctx
  .keys()
  .filter((i: string) => i.match(/\.js$/))
  .map((key: any) => mdxctx(key))

const POSTS = posts
  .map(({ title, date, slug, description, status }: PostType) => ({
    title,
    description,
    date,
    status,
    href: `/writing/${slug}`
  }))
  .sort((a: { date: any }, b: { date: string }) => b.date.localeCompare(a.date))

export default function Writing () {
  return (
    <>
      <PageHeader title={writing.title} description={writing.description} />
      <MainContainer gap='$4'>
        {POSTS.map(
          (post: DataType) =>
            post.status === 'published' && (
              <YStack gap='$1' key={post.href} paddingTop='$8'>
                <FormattedDate date={post.date} />
                <H2 fontFamily='$heading' typescale='$7'>
                  <Link key={post.href} href={post.href as Href<any>}>
                    {post.title}
                  </Link>
                </H2>
                <Paragraph>{post.description}</Paragraph>
              </YStack>
            )
        )}
      </MainContainer>
    </>
  )
}
