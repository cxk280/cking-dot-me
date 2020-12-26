import Image    from 'next/image'
import styles   from '../../styles/Home.module.css'

const Footer = (props) => (
  <div>
    {/* I created the email image at https://www.generateit.net/email-to-image/index.php */}
    <footer className={styles.footer}>
      Hit me up at&nbsp;&nbsp;
      <Image
        src="/go_away_bots.png"
        width={149}
        height={22}
      />
    </footer>
    <footer className={styles.trystero}>
      <Image
        src="/trystero-small.png"
        width={50}
        height={50}
      />
    </footer>
  </div>
)

export default Footer