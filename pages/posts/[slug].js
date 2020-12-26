import Head                   from 'next/head'
import { motion }             from "framer-motion"
import sanitizeHtml           from 'sanitize-html'
import NavBar                 from '../../components/NavBar'
import Footer                 from '../../components/Footer'
import { getSinglePost }      from '../api/posts'
import styles                 from '../../styles/Home.module.css'

const PostPage = (props) => (
  <div className={styles.container}>
    <Head>
      <title>About Me</title>
      <link rel="icon" href="/pynchon-favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=0.5, user-scalable=no" />
    </Head>
    <NavBar />
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
        layoutId="title"
      >
        {props.post.title}
      </motion.h1>
      <motion.div
        className={styles.markdown}
        layoutId="text"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.post.html) }} 
      />
    </main>
    <Footer />
  </div>
)

PostPage.getInitialProps = async params => ({ post: await getSinglePost(params.query.slug) })

export default PostPage