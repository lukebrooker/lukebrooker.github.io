import { resolveAssetUri } from '@/utils/resolveMetroAssets'

type ImageProps = {
  src: number | string
  alt?: string
}

export const Image = ({ src, alt }: ImageProps) => {
  const sourceRef = typeof src === 'string' ? { uri: src } : src
  const source = resolveAssetUri(sourceRef)

  if (source.uri?.match(/\.mp4$/)) {
    return <video src={source.uri} controls autoPlay loop playsInline />
  }

  return (
    <img
      src={source.uri}
      alt={alt}
      loading='lazy'
      style={{
        alignSelf: 'center',
        width: '100%',
        maxWidth: source.width,
        height: 'auto',
        aspectRatio: `${source.width} / ${source.height}`,
        backgroundColor: 'var(--soft)'
      }}
    />
  )
}
