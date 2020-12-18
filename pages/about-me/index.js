import Link           from 'next/link'
import { getPosts }   from '../api/posts'

const FeedIndex = (props) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>
        <Link href={`/[slug]`} as={`/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
)

FeedIndex.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default FeedIndex