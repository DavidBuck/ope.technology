import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutPage = props => {
  const { data, location } = props
  const content = data.markdownRemark
  return (
    <Layout>
      <SEO
        title="about"
        description="about O.P.E. Techology"
        pathname={location.pathname}
      />
      <div className="max-w-3xl sm:p-4">
        <section dangerouslySetInnerHTML={{ __html: content.html }} />
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      html
    }
    file(relativePath: { eq: "jakub-sejkora-utqJcneoFjo-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 752) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
