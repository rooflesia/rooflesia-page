import '../styles/globals.css'

export const metadata = {
  title: 'Rooflesia',
  description: 'Rooflesia Portofolio Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
