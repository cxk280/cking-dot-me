import NavButton  from '../NavButton'
import styles     from '../../styles/Home.module.css'

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