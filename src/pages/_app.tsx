import { MessageContextProvider } from '../contexts/MessageContext';

import Header from '../components/Header';
import Chats from '../components/Chats';

import '../styles/globals.scss'
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return(
    <MessageContextProvider>
      <div className={styles.wrapper}>
        <Chats />
        
        <main>
          <Header />
          <Component {...pageProps} />  
        </main>
      </div>
    </MessageContextProvider>
  )
}

export default MyApp
