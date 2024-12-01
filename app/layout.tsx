import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Student LMS',
  description: 'A learning management system for students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b mx-16 py-4">
              <div className="container flex h-16 items-center">
                <MainNav />
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

