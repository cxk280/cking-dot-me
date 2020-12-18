import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link           from 'next/link'
import { getPosts }   from './api/posts'

const Home = (props) => (
  <div className={styles.container}>
    <Head>
      <title>Christopher King</title>
      <link rel="icon" href="/pynchon-favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Christopher King
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>Software Engineer, Pianist, Traveler</code>
      </p>

      <Link
        href={`/about-me`}
        as={`/about-me`}
      >
        <a>
          <p className={styles.aboutMeButton}>About Me</p>
        </a>
      </Link>

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