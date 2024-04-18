export const site = {
  title: 'Luke Brooker · Product Design Leader',
  url: 'https://lukebrooker.com',
  author: '@lukebrooker',
  description:
    'Learn more about Luke Brooker, a product design leader, writer, and speaker based on the Gold Coast, Australia.'
}

export type MetaItemType = {
  title: string
  shortTitle?: string
  urlPath: string
  description: string
  image?: {
    alt: string
    url: string
  }
  twitterImage?: {
    alt: string
    url: string
  }
  icon: string
  status: 'draft' | 'restricted' | 'published'
}

export type MetaType = {
  [key: string]: MetaItemType
}

export const meta = {
  home: {
    title: site.title,
    urlPath: '/',
    description:
      'Learn more about Luke Brooker, a product design leader, writer, and speaker based on the Gold Coast, Australia.',
    image: {
      alt: 'Luke Brooker',
      url: 'images/luke-brooker-og-image.jpg'
    },
    twitterImage: {
      alt: 'Luke Brooker',
      url: 'images/luke-brooker-twitter-image.jpg'
    },
    icon: 'Home',
    status: 'published'
  },
  writing: {
    title: 'Writing',
    urlPath: '/writing',
    description: 'Exploring ideas & insights',
    icon: 'Newspaper',
    status: 'published'
  },
  work: {
    title: 'Work',
    urlPath: '/work',
    description: "A few key projects I'm proud of",
    icon: 'BookImage',
    status: 'published'
  },
  speaking: {
    title: 'Speaking',
    urlPath: '/speaking',
    description: 'Ideas & insights I’ve shared IRL',
    icon: 'Mic',
    status: 'published'
  },
  resume: {
    title: 'Résumé',
    urlPath: '/resume',
    description: 'My professional experience and skills',
    icon: 'SquareUser',
    status: 'published'
  },
  'user-guide': {
    title: 'User Guide',
    shortTitle: 'Guide',
    urlPath: '/user-guide',
    description: 'How I believe I work best with others',
    icon: 'Signpost',
    status: 'draft'
  },
  'learning-journey': {
    title: 'Learning journey',
    shortTitle: 'Journey',
    urlPath: '/learning-journey',
    description: 'I love learning. That journey started early.',
    icon: 'Route',
    status: 'draft'
  }
}
