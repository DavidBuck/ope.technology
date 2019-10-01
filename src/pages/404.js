import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <section className="sm:p-4">
      <h1>Page Not Found</h1>
    </section>
  </Layout>
)

export default NotFoundPage
