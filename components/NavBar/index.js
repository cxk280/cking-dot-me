import styles from '../../styles/Home.module.css'
import Link           from 'next/link'

const NavBar = (props) => (
  <div className={styles.navBar}>
    <Link
      href={`/`}
      as={`/`}
    >
      <a>
        <p className={styles.navBarButton}>Home</p>
      </a>
    </Link>
    <Link
      href={`/about-me`}
      as={`/about-me`}
    >
      <a>
        <p className={styles.navBarButton}>About Me</p>
      </a>
    </Link>
  </div>
)

export default NavBar