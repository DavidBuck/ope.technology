import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const { children } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="flex flex-col flex-1 px-4 py-8 w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
