import { useLocalSearchParams, usePathname } from 'expo-router'
import Head from 'expo-router/head'
import React from 'react'
import { MarkdownTheme } from '@/components/MarkdownTheme'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { meta, site } from '@/Data'
import { Paragraph } from '@/components/Paragraph'
import { Link } from '@/components/Link'

export async function generateStaticParams (): Promise<{ post: string }[]> {
  return mdxctx
    .keys()
    .filter((i: string) => i.match(/\.js$/))
    .map((key: any) => mdxctx(key).slug)
    .map((post: any) => ({ post }))
}

// @ts-ignore Type added in build step
const mdxctx = require.context('../../../content/work', true, /\.(mdx|js)$/)

type PostInfo = {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  image: string
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
  // resolveAssetUri(info.featuredImage) ?? '/work/og-image/' + info.slug;
  // const imgUrl = `https://lukebrooker.com${img}`;
  const url = `https://lukebrooker.com${pathname}`
  return (
    <Head>
      <title>{info.title} · {meta.work.title} · {site.title}</title>
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
        titleScale='$8'
        image={info.image}
        description={info.description}
        breadcrumbLinks={[
          {
            href: '/work',
            label: 'Work'
          }
        ]}
      >
        <Paragraph typescale='$3' color='$subtle'>
          {info.tags.map((tag, i) => (
            <span key={tag}>
              <span>{tag}</span>
              <span>{i < info.tags.length - 1 ? ' · ' : ''}</span>
            </span>
          ))}
        </Paragraph>
      </PageHeader>
      <MainContainer maxWidth={1000}>
        <MarkdownTheme>
          <MarkdownComponent />
        </MarkdownTheme>
        <Paragraph>Feel free to contact me (details below) for more info on this project. You can also explore <Link href='/work'>more of my work</Link> or view my <Link href='/resume'>resume</Link>.</Paragraph>
      </MainContainer>
    </>
  )
}
