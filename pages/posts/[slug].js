import Head                   from 'next/head'
import NavBar                 from '../../components/NavBar'
import Footer                 from '../../components/Footer'
import { getSinglePost }      from '../api/posts'
import styles                 from '../../styles/Home.module.css'
import sanitizeHtml           from 'sanitize-html'

const PostPage = (props) => (
  <div className={styles.container}>
    <Head>
      <title>About Me</title>
      <link rel="icon" href="/pynchon-favicon.ico" />
    </Head>
    <NavBar />
    <main className={styles.main}>
      <div>
        <h1 className={styles.markdown}>{props.post.title}</h1>
        <div 
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.post.html) }} 
        />
      </div>
    </main>
    <Footer />
  </div>
)

PostPage.getInitialProps = async (params) => ({ post: await getSinglePost(params.query.slug) })

export default PostPage