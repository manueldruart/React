import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Page d'accueil de notre site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen min-h-screen bg-[url('/bg.jpg')] bg-no-repeat bg-cover px-8 py-2">
        <Navbar />
        <main className="container mx-auto ">{children}</main>
      </div>
    </>
  );
}
