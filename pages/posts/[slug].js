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
    </Head>
    <NavBar />
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
          layoutId="title"
        >
          {props.post.title}
        </motion.h1>
      <motion.p
        className={styles.markdown}
        layoutId="text"
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.post.html) }} 
      />
    </main>
    <Footer />
  </div>
)

PostPage.getInitialProps = async (params) => ({ post: await getSinglePost(params.query.slug) })

export default PostPage