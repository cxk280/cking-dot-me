import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link           from 'next/link'
import { getPosts }   from './api/posts'

const Home = (props) => (
  <div className={styles.container}>
    <Head>
      <title>Christopher King</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Christopher King
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>Software Engineer, Pianist, Traveler</code>
      </p>

      {/* <div className={styles.grid}> */}
        {/* <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Software &rarr;</h3>
          <p>Engineering life.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Music &rarr;</h3>
          <p>Mostly classical.</p>
        </a> */}

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
        >
          {/* <h3 className={styles.aboutMeLink}>About Me</h3> */}
          <p className={styles.aboutMeButton}>About Me</p>
        </a>
      {/* </div> */}

      {/* Put pic of myself instead of the *** */}
      <div className={styles.profilePicDiv}>
        <Image
          src="/chris_profile_cropped.jpg"
          width={150}
          height={150}
          className={styles.profilePic}
        />
      </div>

      {props.posts.map(post => (
        <Link key={post.id} href={`/[slug]`} as={`/${post.slug}`}>
          <a className={styles.card}>
            <h3>{post.title} &rarr;</h3>
            <p>Something</p>
          </a>
        </Link>
      ))}
    </main>

    {/* FYI: The background color of my email image is #FFDBDE */}
    {/* I created it at https://www.generateit.net/email-to-image/index.php */}
    <footer className={styles.footer}>
      Hit me up at&nbsp;&nbsp;
      <Image
        src="/go_away_bots.png"
        width={149}
        height={22}
      />
    </footer>
  </div>
)

Home.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default Home