import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children, title, currentPage }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Page d'accueil de notre site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-screen min-h-screen bg-gray-200 px-8 py-2">
        <header className="flex items-center w-full bg-white rounded-md px-6 py-4 shadow-md duration-200 hover:shadow-lg">
          <Image src="/favicon.ico" alt="Picture of the autor" width={70} height={70} />
          <nav className="ml-8">
            <ul className="flex">
              <li className="mr-6">
                <Link href="/" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'home'
                        ? 'bg-indigo-600 hover:bg-indigo-800 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/todos" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'todos'
                        ? 'bg-indigo-600 hover:bg-indigo-800 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Todos
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/github" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'github'
                        ? 'bg-indigo-600 hover:bg-indigo-800 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Github
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container p-8 mx-auto">{children}</main>
      </div>
    </>
  );
}
