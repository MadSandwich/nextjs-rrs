import Link from "next/link";
import Providers from "./providers";
import ThemeSwitch from "./components/themeSwitch";
import './css/main.css'

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <main>
            <ThemeSwitch />
            <nav>
              <Link href="/">Home</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/dashboard/settings">Settings</Link>
            </nav>
          </main>
          {children}
        </Providers>
      </body>
    </html>
  );
}
