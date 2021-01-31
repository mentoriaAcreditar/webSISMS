import Head from 'next/head';
import LandingPage from './home';
import Login from './signin';

export default function Home() {
  return (
    <>
      <Head>
        <title>SISMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}
