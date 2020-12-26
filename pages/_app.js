import '../styles/globals.css'

import { AnimateSharedLayout } from "framer-motion"

function CkingDotMe({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default CkingDotMe
