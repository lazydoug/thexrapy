import './globals.css'

import NavBar from '@/components/navbar'

export const metadata = {
  title: 'Thexrapy',
  description: 'The path to mental well-being',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
