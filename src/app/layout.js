import Layout from "../components/layout"
import "./globals.css"

export const metadata = {
  title: "ConstructCo",
  description: "Professional construction services for all your needs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
