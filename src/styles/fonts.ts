import { Darker_Grotesque, Major_Mono_Display } from 'next/font/google'

export const darker = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-darker-grotesque',
})

export const major = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-major-mono-display',
})
