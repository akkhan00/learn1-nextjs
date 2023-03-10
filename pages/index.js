import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* Global will global this styles */}
      {/* <script jsx global>
        {`
        h2{
          background-color:red;
        }
      `}
      </script> */}
      {/* Head Component */}
      <Head>
        <title>Dark Blog Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Script component */}
      {/* <Script src='/sc.js'  strategy='lazyOnload'></Script> */}

      <main className={styles.main}>
        <h2 className={styles.hh2}>Dark Blog Post</h2>
        <div className={styles.wraper}>
          <img src="/img1.avif" width={300} height={200} alt="header img" />
        </div>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2 className={inter.className}>
              Nothing <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {' '}
              there is no blog on this site at the moment&nbsp;Learn More!{' '}
            </p>
          </a>
          <a className={styles.card}>
            <h2 className={inter.className}>
              Hack <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {' '}
              World state bank hacked yesterday &nbsp; GO!{' '}
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
