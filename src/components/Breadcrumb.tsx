import { XStack } from 'tamagui'
import { Paragraph } from '@/components/Paragraph'
import { Link } from '@/components/Link'

type Link = {
  href?: string
  label: string
}

export type BreadcrumbProps = {
  links?: Link[]
}

export const Breadcrumb = ({ links = [] }: BreadcrumbProps) => {
  const allLinks = [
    {
      href: '/',
      label: 'Home'
    },
    ...links
  ]
  return (
    <XStack gap='$3' alignItems='center' tag='nav'>
      <Paragraph tag='ul'>
        {allLinks.map(link => (
          <Paragraph tag='li' key={link.label}>
            {!link.href ? (
              <>{link.label}</>
            ) : (
              <Link href={link.href} styled>
                {link.label}
              </Link>
            )}

            {link.href && ' / '}
          </Paragraph>
        ))}
      </Paragraph>
    </XStack>
  )
}
