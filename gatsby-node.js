const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require(`gatsby-remark-relative-images`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const projectTemplate = path.resolve(`./src/templates/project.js`)
  const result = await graphql(
    `
      {
        blog: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/content/projects/**/*.md" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.blog.edges
  const projects = result.data.projects.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const postPath = `/blog${post.node.fields.slug.replace(/-/g, "/")}`

    createPage({
      path: postPath,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node
    const projectPath = `/project${project.node.fields.slug}`

    createPage({
      path: projectPath,
      component: projectTemplate,
      context: {
        slug: project.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
