import './globals.css'
import { Nunito } from 'next/font/google'
import Modal from './components/Modal'
import Navbar from './components/navbar/Navbar'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Modal />
        {children}
      </body>
    </html>
  )
}
