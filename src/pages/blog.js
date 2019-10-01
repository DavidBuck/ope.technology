import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = props => {
  const { data, location } = props
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO
        title="All Posts"
        description="O.P.E. Blog"
        pathname={location.pathname}
      />
      <div className="max-w-3xl sm:p-4">
        <h1 className="pb-4">Blog</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const blogPath = `/blog${node.fields.slug.replace(/-/g, "/")}`
          const featuredImgFluid = node.frontmatter.featuredImage
            ? node.frontmatter.featuredImage.childImageSharp.fluid
            : null
          return (
            <article
              key={node.fields.slug}
              className="py-4 border-t-2 border-black"
            >
              <header>
                <h3>
                  <Link
                    className="no-underline hover:line-through focus:line-through active:line-through"
                    to={blogPath}
                  >
                    {title}
                  </Link>
                </h3>
                <small className="italic">{node.frontmatter.date}</small>
                {featuredImgFluid && (
                  <div className="max-w-xs">
                    {featuredImgFluid && <Img fluid={featuredImgFluid} />}
                  </div>
                )}
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
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
                fluid(maxWidth: 120, quality: 100) {
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
