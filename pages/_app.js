import '../styles/main.css'
import React from 'react'
import Head from 'next/head'


const MyApp = ({ Component, pageProps }) => (
  <>
  <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet">
          
      </link>
    
  </Head>
  <Component {...pageProps} />
</>
)

export default MyApp
