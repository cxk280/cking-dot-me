import { useState, useEffect }   from 'react'
import Head                             from 'next/head'
import Image                            from 'next/image'
import Link                             from 'next/link'
import Pagination                       from '@material-ui/lab/Pagination'
import Grow                             from '@material-ui/core/Grow'
import { motion } from "framer-motion"

import NavBar         from '../components/NavBar'
import Footer         from '../components/Footer'

import styles         from '../styles/Home.module.css'
import { getPosts }   from './api/posts'

const getSubHeading = excerpt => excerpt.slice(0, excerpt.indexOf("\n"))

const Home = props => {
  const { posts } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPosts, setCurrentPosts] = useState(posts.slice(0, 5))
  const [checked, setChecked] = useState(true)
  const postCount = posts.length

  const handlePaginationClick = (event, page) => {
    setChecked(false)
    setCurrentPage(page)
    const sliceBeginning = (page * 5) - 5
    const sliceEnding = sliceBeginning + 5
    setCurrentPosts(posts.slice(sliceBeginning, sliceEnding))
    setChecked(true)
  }

  useEffect(() => {
    handlePaginationClick(null, 1)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Christopher King</title>
        <link rel="icon" href="/pynchon-favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5, user-scalable=no" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <motion.h1
          className={styles.title}
          layoutId="title"
        >
          Christopher King
        </motion.h1>
        <motion.p 
          className={styles.description} 
          layoutId="text"
        >
          <code className={styles.code}>Software Engineer, Pianist, Traveler</code>
        </motion.p>

        <motion.figure 
          className="image"
          layoutId="image"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 0,  opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <Image
            src="/chris_profile_cropped.jpg"
            width={150}
            height={150}
            className={styles.profilePic}
          />
        </motion.figure>

        {currentPosts.map(post => (
          <Link key={post.id} href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
            <Grow 
              in={checked}
              style={{ transformOrigin: '50 50 50' }}
              {...(checked ? { timeout: 1500 } : {})}
            >
              <a className={styles.card}>
                <h3>{post.title} &rarr;</h3>
                <p>{getSubHeading(post.excerpt)}</p>
              </a>
            </Grow>
          </Link>
        ))}
        <Pagination 
          count={postCount > 5 ? Math.ceil(postCount / 5) : 1}
          page={currentPage}
          onChange={handlePaginationClick}
        />
      </main>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => ({ posts: await getPosts() })

export default Home