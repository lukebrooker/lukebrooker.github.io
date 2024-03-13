import { meta, MetaItemType } from '@/Data'
import { usePathname } from 'expo-router'
import { PageContainer } from '@/components/PageContainer'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { Link } from '@/components/Link'
import { Paragraph } from '@/components/Paragraph'
import { YStack } from 'tamagui'
import { getCurrentPath } from '@/utils/getCurrentPath'

export default function NotFoundScreen () {
  const pathname = usePathname()
  const currentKey = getCurrentPath(pathname).replace('/', '')
  const currentMeta = meta[currentKey as keyof typeof meta] as MetaItemType

  return (
    <PageContainer>
      <PageHeader
        title={currentMeta.title || 'Not found'}
        description={currentMeta.description || 'This page does not exist'}
      />
      <MainContainer>
        <YStack gap='$4'>
          <Paragraph>
            {currentMeta.title
              ? `The page ${currentMeta.title} is coming soon.`
              : 'The page you are looking for does not exist.'}{' '}
            <Link href='/'>Go back home</Link>
          </Paragraph>
        </YStack>
      </MainContainer>
    </PageContainer>
  )
}
