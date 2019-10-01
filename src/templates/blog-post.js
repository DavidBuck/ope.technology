import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = props => {
  const { data, location, pageContext } = props
  const { previous, next } = pageContext
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.fluid
    : null
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={location.pathname}
        image={featuredImgFluid}
      />
      <div className="max-w-3xl sm:p-4">
        <article>
          <header>
            <h1 className="py-2">{post.frontmatter.title}</h1>
            {featuredImgFluid && <Img fluid={featuredImgFluid} />}
            <p className="italic">{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>

        <nav className="py-4">
          <ul className="flex flex-wrap justify-between list-none">
            <li>
              {previous && (
                <>
                  <span>← </span>
                  <Link
                    className="underline hover:line-through focus:line-through active:line-through"
                    to={`/blog/${previous.fields.slug.replace(/-/g, "/")}`}
                    rel="prev"
                  >
                    {previous.frontmatter.title}
                  </Link>
                </>
              )}
            </li>
            <li>
              {next && (
                <>
                  <Link
                    className="underline hover:line-through focus:line-through active:line-through"
                    to={`/blog/${next.fields.slug.replace(/-/g, "/")}`}
                    rel="next"
                  >
                    {next.frontmatter.title}
                  </Link>
                  <span> →</span>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
