import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTemplate = props => {
  const { data, location, pageContext } = props
  const post = data.markdownRemark
  const { previous, next } = pageContext
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
      <div className="sm:p-4">
        <article className="flex flex-wrap">
          <div className="max-w-2xl">
            <header>
              <h1 className="py-2">{post.frontmatter.title}</h1>
              <p className="italic">{post.frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className=" w-full max-w-lg">
            {featuredImgFluid && <Img fluid={featuredImgFluid} />}
          </div>
        </article>

        <nav className="py-4">
          <ul className="flex flex-wrap justify-between list-none">
            <li>
              {previous && (
                <>
                  <span>← </span>
                  <Link
                    className="underline hover:line-through focus:line-through active:line-through"
                    to={`/project${previous.fields.slug}`}
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
                    to={`/project${next.fields.slug}`}
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

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
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
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
