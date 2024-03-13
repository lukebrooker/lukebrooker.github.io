import React from 'react'
import { YStack } from 'tamagui'
import { Paragraph } from '@/components/Paragraph'
import { Link } from '@/components/Link'
import { Strong } from '@/components/Strong'
import { DefinitionList, DefinitionTerm, DefinitionDescription } from './Lists'

type ContactProps = {
  maxWidth: number | string
}

export const Contact = ({ maxWidth }: ContactProps) => {
  return (
    <YStack gap='$4' maxWidth={maxWidth}>
      <Paragraph>
        Email me at{' '}
        <Link href='mailto:mail@lukebrooker.com'>mail@lukebrooker.com</Link>
      </Paragraph>
      <YStack gap='$1'>
        <Paragraph typescale='$3'>
          <Strong>Or find me elsewhere:</Strong>
        </Paragraph>
        <DefinitionList>
          <DefinitionTerm>LinkedIn</DefinitionTerm>
          <DefinitionDescription>
            <Link href='https://linkedin.com/in/lukebrooker'>
              @Luke Brooker
            </Link>
          </DefinitionDescription>
          <DefinitionTerm>X</DefinitionTerm>
          <DefinitionDescription>
            <Link href='https://x.com/lukebrooker'>@lukebrooker</Link>
          </DefinitionDescription>
          <DefinitionTerm>Github</DefinitionTerm>
          <DefinitionDescription>
            <Link href='https://github.com/lukebrooker'>@lukebrooker</Link>
          </DefinitionDescription>
          <DefinitionTerm>Instagram</DefinitionTerm>
          <DefinitionDescription>
            <Link href='https://www.instagram.com/lukebrooker/'>
              @lukebrooker
            </Link>
          </DefinitionDescription>
          <DefinitionTerm>Dribbble</DefinitionTerm>
          <DefinitionDescription>
            <Link href='https://dribbble.com/lukebrooker'>@lukebrooker</Link>
          </DefinitionDescription>
          <DefinitionTerm>Meetup</DefinitionTerm>
          <DefinitionDescription>
            <Link href='https://www.meetup.com/Product-of-BNE/'>
              Product of BNE
            </Link>
          </DefinitionDescription>
        </DefinitionList>
      </YStack>
    </YStack>
  )
}
