import GhostContentAPI from "@tryghost/content-api"

// Create API instance with site credentials
// This API key only pulls publicly-available data (my Ghost posts) and so does not need to be environmental variable
const api = new GhostContentAPI({
  url: 'https://christopherking.ghost.io',
  key: 'e371b181591a8503af3db8ec90',
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