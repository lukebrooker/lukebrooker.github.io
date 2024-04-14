import { YStack } from 'tamagui'
import { Paragraph } from '@/components/Paragraph'
import { Breadcrumb, BreadcrumbProps } from '@/components/Breadcrumb'
import { H1 } from '@/components/Heading'
import { Image } from '@/components/Image'
import { ReactNode } from 'react'

type Props = {
  title: string
  titleScale?: '$7' | '$8' | '$9' | '$10'
  image?: string
  description: string
  headerTop?: ReactNode
  breadcrumbLinks?: BreadcrumbProps['links']
  children?: ReactNode
}

export const PageHeader = ({
  title,
  titleScale = '$9',
  image,
  headerTop,
  description,
  breadcrumbLinks = [],
  children
}: Props) => {
  return (
    <YStack
      gap='$6'
      paddingHorizontal='$3'
      alignItems='center'
      maxWidth={1000}
      tag='header'
    >
      <Breadcrumb links={breadcrumbLinks} />
      {headerTop}
      {image && <Image src={image} alt={title} inline contained />}
      <H1 textAlign='center' typescale={titleScale} $sm={{ typescale: '$9' }}>
        {title}
      </H1>
      <Paragraph
        fontFamily='$paragraphLight'
        typescale='$5'
        color='$contrast'
        textAlign='center'
      >
        {description}
      </Paragraph>
      {children}
    </YStack>
  )
}
