import '../styles/main.css';
import React from 'react';
import Head from 'next/head';
import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDVwFOYXcveGLrsStC6Tkl52p7TFtLdMjw',
  authDomain: 'websisms.firebaseapp.com',
  projectId: 'websisms',
  storageBucket: 'websisms.appspot.com',
  messagingSenderId: '822642216845',
  appId: '1:822642216845:web:00a5eb719acb039b79f7c4',
  measurementId: 'G-0DCK99XRTV',
};
try {
  firebase.initializeApp(config);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const MyApp = ({ Component, pageProps }: any) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
