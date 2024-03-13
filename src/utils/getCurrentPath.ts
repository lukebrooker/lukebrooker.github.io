export function ensureSlash (inputPath: string, needsSlash: boolean): string {
  const hasSlash = inputPath.startsWith('/')
  if (hasSlash && !needsSlash) {
    return inputPath.substr(1, inputPath.length)
  } else if (!hasSlash && needsSlash) {
    return `/${inputPath}`
  } else {
    return inputPath
  }
}

export const getCurrentPath = (pathname: string) =>
  ensureSlash(pathname || '', true) || 'home'
