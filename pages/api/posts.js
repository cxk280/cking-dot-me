import GhostContentAPI from "@tryghost/content-api"

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://christopherking.ghost.io',
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: 'v3'
})

export const getPosts = async () => await api.posts
  .browse({
    limit: "all"
  })
  .catch(err => {
    console.error(err)
  })

export const getSinglePost = async postSlug => await api.posts
  .read({
    slug: postSlug
  })
  .catch(err => {
    console.error(err)
  })