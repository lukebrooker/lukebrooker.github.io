import { MDXComponents } from '@bacons/mdx'
import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from '@/components/Heading'
import { Image } from '@/components/Image'
import { Paragraph } from '@/components/Paragraph'
import { ListItem, UnorderedList, OrderedList } from '@/components/Lists'
import { Strong } from '@/components/Strong'
import { Link } from '@/components/Link'
import { Hr } from '@/components/Hr'

export function MarkdownTheme ({ children }: { children: React.ReactNode }) {
  return (
    <MDXComponents
      h1={({ children }) => <H1 copy children={children} />}
      h2={({ children }) => <H2 copy children={children} />}
      h3={({ children }) => <H3 copy children={children} />}
      h4={({ children }) => <H4 copy children={children} />}
      h5={({ children }) => <H5 copy children={children} />}
      h6={({ children }) => <H6 copy children={children} />}
      pre={({ children }) => {
        return <pre children={children} />
      }}
      em={({ children }) => <em children={children} />}
      p={({ children, parentName }) => {
        const image = React.Children.toArray(children).find(child => {
          return (
            typeof child === 'object' && 'props' in child && child.props.src
          )
        })
        if (image) {
          return <>{children}</>
        }
        if (parentName === 'html.blockquote') {
          return <p>{children}</p>
        }
        return <Paragraph typescale='$4'>{children}</Paragraph>
      }}
      br={() => <br />}
      strong={({ children }) => <Strong children={children} />}
      blockquote={({ children }) => (
        <Paragraph
          tag='blockquote'
          typescale='$5'
          fontFamily='$paragraphLight'
          paddingVertical='$3'
          paddingHorizontal='$4'
          borderLeftWidth={8}
          borderLeftColor='$lime500'
          backgroundColor='$faint'
          children={children}
          $gtMd={{
            paddingVertical: '$4',
            paddingHorizontal: '$6',
            marginVertical: '$4'
          }}
        />
      )}
      a={Link}
      img={Image}
      ul={({ children }) => <UnorderedList children={children} />}
      ol={({ children }) => <OrderedList children={children} />}
      li={({ children }) => <ListItem children={children} />}
      hr={() => <Hr />}
    >
      {children}
    </MDXComponents>
  )
}
