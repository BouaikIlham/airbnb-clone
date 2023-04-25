import './globals.css'
import { Nunito } from 'next/font/google'
import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'

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
        <ClientOnly>
          <Modal actionLabel="Submit" title="hello"  isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
