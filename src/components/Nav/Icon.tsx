import {
  BookImage,
  Home,
  Mic,
  Newspaper,
  Route,
  Signpost,
  SquareUser
} from '@tamagui/lucide-icons'

export type NavIconsType = {
  BookImage: typeof BookImage
  Home: typeof Home
  Mic: typeof Mic
  Newspaper: typeof Newspaper
  Route: typeof Route
  Signpost: typeof Signpost
  SquareUser: typeof SquareUser
}

const NavIcons: NavIconsType = {
  BookImage,
  Home,
  Mic,
  Newspaper,
  Route,
  Signpost,
  SquareUser
}

export const NavIcon = ({ icon }: { icon: keyof NavIconsType }) => {
  const ChosenIcon = NavIcons[icon] || Newspaper
  return <ChosenIcon strokeWidth={1.5} />
}
