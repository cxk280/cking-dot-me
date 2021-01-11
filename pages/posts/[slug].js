import Head                   from 'next/head'
import { motion }             from "framer-motion"
import sanitizeHtml           from 'sanitize-html'
import NavBar                 from '../../components/NavBar'
import Footer                 from '../../components/Footer'
import { getSinglePost }      from '../api/posts'
import styles                 from '../../styles/Home.module.css'

const PostPage = (props) => {
  console.log("🚀 ~ file: [slug].js ~ line 10 ~ PostPage ~ props.post", props.post)
  // get the date from props.post.created_at (this will not change when edits are made to the post)
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.post.title.slice(2)}</title>
        <link rel="icon" href="/pynchon-favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5, user-scalable=no" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <motion.h1
          className={styles.postTitle}
          layoutId="title"
        >
          {props.post.title}
        </motion.h1>
        <motion.h2
          className={styles.postDate}
          layoutId="date"
        >
          {`${props.post.created_at.slice(5,10)}-${props.post.created_at.slice(0,4)}`}
        </motion.h2>
        <motion.div
          className={styles.markdown}
          layoutId="text"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.post.html) }} 
        />
      </main>
      <Footer />
    </div>
  )
}

PostPage.getInitialProps = async params => ({ post: await getSinglePost(params.query.slug) })

export default PostPage