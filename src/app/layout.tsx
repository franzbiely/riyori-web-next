import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Ryori</title>
      </head>
      <body style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <div style={{
          width:400,
          
        }}>
          {children}
        </div>
      </body>
    </html>
  )
}
