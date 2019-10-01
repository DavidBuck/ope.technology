import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = props => {
  const { data, location } = props
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO
        title="home"
        description="OPE Projects"
        pathname={location.pathname}
      />
      <section className="py-4 sm:p-4 max-w-6xl">
        <div className="font-display text-lg sm:text-6xl">
          We create experiments using Web technolgies, Machine Learning and
          hardware. You can explore our projects here, along with tools and
          resources.
        </div>
      </section>

      <section className="flex flex-wrap  max-w-7xl">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const projectPath = `/project${node.fields.slug}`
          const featuredImgFluid = node.frontmatter.featuredImage
            ? node.frontmatter.featuredImage.childImageSharp.fluid
            : null
          return (
            <div className="w-full h-auto max-w-sm my-2 sm:m-4 sm:w-94 h-94 flex-none relative">
              <Link
                to={projectPath}
                className="hover:opacity-50 focus:opacity-50  active:opacity-50"
              >
                {featuredImgFluid && <Img fluid={featuredImgFluid} />}
                <span className="absolute inset-0 p-5 text-black font-display text-2xl">
                  <span>{title}: </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </span>
              </Link>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/projects/**/*.md" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 375, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
