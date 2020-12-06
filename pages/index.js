import Head from 'next/head';
import "../styles/main.css";
import LandingPage from '../pages/home';

export default function Home() {
  return (
    <div  className="flex flex-col items-center flex-1  bg-blue">
   
      
     
      <Head>
        <title>SISMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <LandingPage/> 
    </div>
  )
}
