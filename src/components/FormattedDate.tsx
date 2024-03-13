import { Paragraph } from '@/components/Paragraph'

type Props = {
  date: string
  prefix?: string
}

export const FormattedDate = ({ date, prefix = 'Published on' }: Props) => {
  const formattedDate = new Date(date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  return (
    <Paragraph typescale='$2' color='$subtle'>
      {prefix} {formattedDate}
    </Paragraph>
  )
}
