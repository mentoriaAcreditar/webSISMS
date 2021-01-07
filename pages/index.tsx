import Head from 'next/head';
import LandingPage from './home';

export default function Home() {
  return (
    <div className="flex flex-col items-center flex-1  bg-blue6">
      <Head>
        <title>SISMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
  );
}
