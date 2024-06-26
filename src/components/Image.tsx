import { resolveAssetUri } from '@/utils/resolveMetroAssets'

type ImageProps = {
  src: number | string
  alt?: string
  inline?: boolean
  contained?: boolean
}

export const Image = ({ src, alt, inline, contained }: ImageProps) => {
  const sourceRef = typeof src === 'string' ? { uri: src } : src
  const source = resolveAssetUri(sourceRef)

  if (source.uri?.match(/\.mp4$/)) {
    return (
      <video
        src={source.uri}
        poster={source.uri
          .replace('/videos', '/images')
          .replace('.mp4', '-poster.jpg')}
        controls
        playsInline
        className={inline ? 'inline-media' : ''}
        style={{
          borderRadius: 'var(--radius-3)',
          border: contained ? '1px solid var(--thin)' : 'none',
          maxWidth: '100%',
          width: inline ? '120%' : '100%',
        }}
      />
    )
  }

  return (
    <img
      src={source.uri}
      alt={alt}
      loading='lazy'
      className={inline ? 'inline-media' : ''}
      style={{
        borderRadius: 'var(--radius-3)',
        border: contained ? '1px solid var(--thin)' : 'none',
        alignSelf: 'center',
        width: inline ? '120%' : '100%',
        maxWidth: source.width,
        height: 'auto',
        aspectRatio: `${source.width} / ${source.height}`,
        backgroundColor: 'var(--soft)'
      }}
    />
  )
}
