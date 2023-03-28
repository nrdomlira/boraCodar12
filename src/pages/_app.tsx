import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Roboto } from 'next/font/google'


const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})
const roboto = Roboto({ weight: ['400'], subsets: ['latin'], variable: '--font-roboto' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
