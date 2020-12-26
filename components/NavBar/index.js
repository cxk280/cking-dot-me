import styles from '../../styles/Home.module.css'
import Link           from 'next/link'
import NavButton from '../NavButton'
import { motion } from "framer-motion"

const NavBar = (props) => (
  <div className={styles.navBar}>
    <NavButton 
      buttonHref={`/`}
      buttonAs={`/`}
      buttonText={'Home'}
    />
    <NavButton 
      buttonHref={`/about-me`}
      buttonAs={`/about-me`}
      buttonText={'About Me'}
    />
  </div>
)

export default NavBar