const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              coachList {
                coachName
                jobTitle
                photo
                bio
                tags
                links {
                  website
                  linkedin
                  twitter
                  facebook
                  instagram
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Coach Profile Pages:
    let coachProfiles = []
    // Iterate through each post, putting all found coaches into `coachProfiles`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.coachList`)) {
        edge.node.frontmatter.coachList.forEach(coachProfile => {
          coachProfiles = coachProfiles.concat(coachProfile)
        })
      }
    })

    // Eliminate duplicate coach profiles
    coachProfiles = _.uniqBy(coachProfiles, 'coachName');

    // Make coach pages
    coachProfiles.forEach(coachProfile => {
      const coachPath = `/coaches/${_.kebabCase(coachProfile.coachName)}/`

      createPage({
        path: coachPath,
        component: path.resolve(`src/templates/coach-profile.js`),
        context: {
          coachName: coachProfile.coachName,
          jobTitle: coachProfile.jobTitle,
          photo: coachProfile.photo,
          bio: coachProfile.bio,
          tags: coachProfile.tags,
          links: coachProfile.links
        },
      })
    })
    
    
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-flickity-component/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}