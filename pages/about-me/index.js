import Head               from 'next/head'
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
    </Head>
    <NavBar />
    <main className={styles.main}>
      <div
        className={styles.markdown}
        // The `remark` library imported in `markdownToHtml` automatically sanitizes the HTML string
        dangerouslySetInnerHTML={{ __html: props.content }}
      >
      </div>
    </main>
    <Footer />
  </div>
)

Index.getInitialProps = async () => ({ content: await markdownToHtml(aboutMeMarkdown) })

export default Index
