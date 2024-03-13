import { PixelRatio } from 'react-native'
// @ts-ignore
import registry from '@react-native/assets-registry/registry'
const svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/

type Asset = {
  uri: string
  fileSystemLocation?: string
  hash?: string
  height?: number
  httpServerLocation?: string
  name?: string
  scales?: number[]
  type?: string
  width?: number
}

export function resolveAssetUri (source: any): Asset {
  let uri = null
  let asset = null
  if (typeof source === 'number') {
    // get the URI from the packager
    asset = registry.getAssetByID(source)
    if (asset == null) {
      throw new Error(
        `Image: asset with ID "${source}" could not be found. Please check the image source or packager.`
      )
    }
    let scale = asset.scales[0]
    if (asset.scales.length > 1) {
      const preferredScale = PixelRatio.get()
      // Get the scale which is closest to the preferred scale
      scale = asset.scales.reduce((prev: number, curr: number) =>
        Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale)
          ? curr
          : prev
      )
    }
    const scaleSuffix = scale !== 1 ? `@${scale}x` : ''
    uri = asset
      ? `${asset.httpServerLocation}/${asset.name}${scaleSuffix}.${asset.type}`
      : ''
  } else if (typeof source === 'string') {
    uri = source
  } else if (source && typeof source.uri === 'string') {
    uri = source.uri
  }

  if (uri) {
    const match = uri.match(svgDataUriPattern)
    // inline SVG markup may contain characters (e.g., #, ") that need to be escaped
    if (match) {
      const [, prefix, svg] = match
      const encodedSvg = encodeURIComponent(svg)
      return { uri: `${prefix}${encodedSvg}` }
    }
  }

  return {
    ...asset,
    uri: uri
  }
}
