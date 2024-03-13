import { MarkdownTheme } from '@/components/MarkdownTheme'
import { PageHeader } from '@/components/PageHeader'
import { MainContainer } from '@/components/MainContainer'
import { Avatar } from '@/components/Avatar'
import Resume from './index.mdx'
import { meta } from '@/Data'

export default function App () {
  return (
    <>
      <PageHeader
        headerTop={<Avatar />}
        title='Luke Brooker'
        breadcrumbLinks={[{ label: meta.resume.title }]}
        description='I’m an entrepreneurial designer experienced in design, engineering, product, leadership, and community building.'
      />
      <MainContainer paddingBottom='$16'>
        <MarkdownTheme>
          <Resume />
        </MarkdownTheme>
      </MainContainer>
    </>
  )
}
