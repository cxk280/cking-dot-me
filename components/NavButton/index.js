import Link           from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from "framer-motion"

const NavButton = props => (
  <Link
    href={props.buttonHref}
    as={props.buttonAs}
  >
    <a>
      <motion.p
        className={styles.navBarButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {props.buttonText}
      </motion.p>
    </a>
  </Link>
)

export default NavButton