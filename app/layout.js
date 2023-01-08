import Link from "next/link";
import Provider from "./provider";
import ThemeSwitch from "../utils/themeSwitch";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <main>
            <ThemeSwitch />
            <nav>
              <Link href="/">Home</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/dashboard/settings">Settings</Link>
            </nav>
          </main>
          {children}
        </Provider>
      </body>
    </html>
  );
}
