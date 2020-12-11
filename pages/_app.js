import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from 'styles/Theme'
import Head from 'next/head'

import StoreProvider from 'Store'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>eCommerce</title>
      </Head>
    	<StoreProvider>
  	  	<ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp
