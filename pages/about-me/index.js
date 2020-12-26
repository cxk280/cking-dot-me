import Head               from 'next/head'
import { motion } from "framer-motion"
import NavBar             from '../../components/NavBar'
import Footer             from '../../components/Footer'
import markdownToHtml     from '../../lib/markdownToHtml'
import aboutMeMarkdown    from '../../_markdown/aboutMe.md'
import styles             from '../../styles/Home.module.css'

const Index = (props) => (
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
        About Me
      </motion.h1>
      <motion.p
        className={styles.markdown}
        layoutId="text"
        // The `remark` library imported in `markdownToHtml` automatically sanitizes the HTML string
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </main>
    <Footer />
  </div>
)

Index.getInitialProps = async () => ({ content: await markdownToHtml(aboutMeMarkdown) })

export default Index
