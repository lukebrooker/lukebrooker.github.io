import { useLocalSearchParams, usePathname } from 'expo-router'
import Head from 'expo-router/head'
import React from 'react'
import { MarkdownTheme } from '@/components/MarkdownTheme'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { FormattedDate } from '@/components/FormattedDate'
import { Paragraph } from '@/components/Paragraph'
import { Link } from '@/components/Link'
import { YStack } from 'tamagui'
import { meta, site } from '@/Data'

export async function generateStaticParams (): Promise<{ post: string }[]> {
  return mdxctx
    .keys()
    .filter((i: string) => i.match(/\.js$/))
    .map((key: any) => mdxctx(key).slug)
    .map((post: any) => ({ post }))
}

// @ts-ignore Type added in build step
const mdxctx = require.context('../../../content/speaking', true, /\.(mdx|js)$/)

type PostInfo = {
  title: string
  description: string
  date: string
  slug: string
  teaserImage: string
  embedLink: string
  slidesLink: string
}

function useData (postId: string): null | {
  MarkdownComponent: any
  info: PostInfo
} {
  const MDKey = React.useMemo(
    () => mdxctx.keys().find((p: string) => p === './' + postId + '/index.mdx'),
    [postId]
  )

  const mdinfo = React.useMemo(
    () => mdxctx.keys().find((p: string) => p === './' + postId + '/index.js'),
    [postId]
  )

  const MD = MDKey ? mdxctx(MDKey).default : null
  const Info = mdinfo ? mdxctx(mdinfo) : null

  if (!MD || !Info) {
    return null
  }
  return { MarkdownComponent: MD, info: Info }
}

function BlogHead ({ info }: { info: PostInfo }) {
  const pathname = usePathname()
  // const img =
  // resolveAssetUri(info.featuredImage) ?? '/speaking/og-image/' + info.slug;
  // const imgUrl = `https://lukebrooker.com${img}`;
  const url = `https://lukebrooker.com${pathname}`
  return (
    <Head>
      <title>{info.title} · {meta.speaking.title} · {site.title}</title>
      <meta name='description' content={info.description} />
      {/* TODO: Dynamic */}
      {/* <meta name="keywords" content={info.tags.join(',')} /> */}

      {/* <meta property='og:image:secure_url' content={imgUrl} /> */}
      {/* <meta property='og:image' content={imgUrl} /> */}
      <meta property='og:image:alt' content={info.description} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={info.title} />
      <meta property='og:description' content={info.description} />
      <meta property='og:url' content={url} />
      <meta property='og:published_time' content={info.date} />

      <meta property='twitter:url' content={url} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={info.title} />
      <meta name='twitter:description' content={info.description} />
      {/* <meta name='twitter:image' content={imgUrl} /> */}

      <script id='ld+article' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: info.title,
          preview: info.description,
          slug: info.slug,
          url: url,
          status: 'Published',
          // image: [imgUrl],
          datePublished: info.date,
          dateModified: info.date,
          author: ['Luke Brooker']
        })}
      </script>
    </Head>
  )
}

export default function Page () {
  const { post: postId } = useLocalSearchParams<{ post: string }>()
  const data = useData(postId)

  if (!data) {
    return <span>Not Found: {postId}</span>
  }

  const { MarkdownComponent, info } = data

  return (
    <>
      <BlogHead info={info} />
      <PageHeader
        title={info.title}
        description={info.description}
        breadcrumbLinks={[
          {
            href: '/speaking',
            label: 'Speaking'
          }
        ]}
      >
        <FormattedDate date={info.date} />
      </PageHeader>
      <MainContainer maxWidth={1200}>
        <MarkdownTheme>
          <MarkdownComponent />
        </MarkdownTheme>
        <YStack gap='$8'>
          <iframe
            src={info.embedLink || info.slidesLink}
            width='100%'
            height='700'
            style={{
              aspectRatio: '4 / 3'
            }}
          />
        </YStack>
        <Paragraph>
          <Link href={info.slidesLink}>View in full screen</Link>
        </Paragraph>
      </MainContainer>
    </>
  )
}
