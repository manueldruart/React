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
        <header className="flex items-center w-full justify-between bg-white rounded-md px-6 py-4 shadow-md duration-200 hover:shadow-lg">
          <Image src="/favicon.ico" alt="Picture of the autor" width={70} height={70} />
          <nav className="ml-8">
            <ul className="flex uppercase">
              <li className="mr-6">
                <Link href="/" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'home'
                        ? 'bg-indigo-400 hover:bg-indigo-600 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/skills" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'skills'
                        ? 'bg-indigo-600 hover:bg-indigo-800 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Skills
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/career" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'career'
                        ? 'bg-indigo-400 hover:bg-indigo-600 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Career
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/portfolio" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'portfolio'
                        ? 'bg-indigo-400 hover:bg-indigo-600 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/about" passHref={true}>
                  <a
                    className={`block font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'about'
                        ? 'bg-indigo-400 hover:bg-indigo-600 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    About
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/contact" passHref={true}>
                  <a
                    className={`block uppercase font-semibold rounded-lg px-8 py-3 duration-200 ${
                      currentPage === 'contact'
                        ? 'bg-indigo-400 hover:bg-indigo-600 text-white'
                        : 'hover:bg-gray-200'
                    }`}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto ">{children}</main>
      </div>
    </>
  );
}
