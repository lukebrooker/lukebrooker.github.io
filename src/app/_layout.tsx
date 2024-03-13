import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { TamaguiProvider } from 'tamagui'
import { ScrollView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { config } from 'tamagui.config'
import { useFonts } from 'expo-font'
import { Slot, usePathname } from 'expo-router'
import Head from 'expo-router/head'
import { site, meta } from '@/Data'
import { getCurrentPath } from '@/utils/getCurrentPath'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { PageContainer } from '@/components/PageContainer'

import '@tamagui/core/reset.css'
import 'minimal.css'
import 'tamagui-web.css'

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index'
}

export default function RootLayout () {
  const [fontsLoaded, fontsError] = useFonts({
    OutfitLight: require('public/fonts/Outfit-Light.ttf'),
    Outfit: require('public/fonts/Outfit-Regular.ttf'),
    OutfitBold: require('public/fonts/Outfit-Bold.ttf'),
    ClimateCrisis: require('public/fonts/ClimateCrisis-Regular.ttf')
  })

  const layoutScrollRef = useRef<ScrollView>(null)

  const { bottom } = useSafeAreaInsets()
  const paddingBottom = Platform.select({ web: 0, default: bottom + 24 })

  const colorScheme = 'light'
  const pathname = usePathname()

  const currentPath = getCurrentPath(pathname)
  const {
    image = {},
    title = site.title,
    description = site.description
  } = (meta as { [key: string]: any })[currentPath] || meta.home

  const injectMeta = [
    {
      name: `description`,
      content: description
    },
    // Open Graph
    {
      property: `og:description`,
      content: description
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: 'og:site_name',
      content: site.title
    },
    {
      property: 'og:url',
      content: `${site.url}/${currentPath}`
    },
    {
      property: `og:type`,
      content: `website`
    },
    // Image
    { property: 'og:image', content: `${site.url}/${image?.url}` },
    {
      property: 'og:image:secure_url',
      content: `${site.url}/${image?.url?.replace(/^\/+/, '')}`
    },
    // { property: 'og:image:type', content: image.type },
    { property: 'og:image:width', content: image?.width },
    { property: 'og:image:height', content: image?.height },
    { property: 'og:image:alt', content: image?.description },
    // Twitter
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: site.author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: description },
    { name: `twitter:image`, content: `${site.url}/${image?.url}` },

    // Fix viewport by disabling scaling
    {
      key: 'viewport',
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.00001,viewport-fit=cover'
    },
    {
      name: 'msapplication-TileColor',
      content: colorScheme
    },
    {
      name: 'theme-color',
      content: colorScheme
    }
  ]

  const siteTitle = title === site.title ? title : `${title} · ${site.title}`

  if (!fontsLoaded && !fontsError) {
    return null
  }

  useEffect(() => {
    layoutScrollRef?.current?.scrollTo({ y: 0, animated: false })
  }, [currentPath])

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme}
      disableInjectCSS
    >
      <ThemeProvider value={DefaultTheme}>
        <Head>
          <title>{siteTitle}</title>
          {injectMeta.map((value, index) => (
            <meta key={`meta-${index}`} {...value} />
          ))}
        </Head>
        {currentPath !== '/' ? (
          <ScrollView
            contentInset={{ top: 0, bottom: paddingBottom }}
            ref={layoutScrollRef}
          >
            <Nav />
            <PageContainer>
              <Slot />
              {currentPath !== '/resume' && <Footer />}
            </PageContainer>
          </ScrollView>
        ) : (
          <Slot />
        )}
      </ThemeProvider>
    </TamaguiProvider>
  )
}
