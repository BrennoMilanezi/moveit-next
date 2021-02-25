import '../styles/global.css';

import { DesafiosProvider } from '../contexts/DesafiosContext'

function MyApp({ Component, pageProps }) {

  return (
    <DesafiosProvider>
      <Component {...pageProps} />
    </DesafiosProvider>
  )
}

export default MyApp
