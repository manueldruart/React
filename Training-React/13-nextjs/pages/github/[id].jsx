import toast, { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout';

export default function Github({ data }) {
  const copyContent = (e) => {
    const copyText = e.target.innerText;
    navigator.clipboard.writeText(copyText);
    toast('Copied to clipboard!');
  };
  return (
    // <Toaster position="top-center">
    <Layout title="Github - Dépôt" currentPage="github">
      <h1 className="text-2xl pb-4 border-b-2 border-indigo-600">{data.full_name}</h1>
      <p className="mt-4 italic font-semibold mb-4">
        Télécharger le projet via les liens suivants:
      </p>
      <div className="flex ">
        <button
          type="button"
          onClick={copyContent}
          className="px-4 py-3 rounded-sm bg-indigo-600 duration-200 hover:bg-indigo-800 text-white flex items-center">
          {data.ssh_url}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-white w-6 h-6 ml-4"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <g fill="none">
              <path
                d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <button
          type="button"
          onClick={copyContent}
          className=" ml-8 px-4 py-3 rounded-sm bg-indigo-600 duration-200 hover:bg-indigo-800 text-white flex items-center">
          {data.clone_url}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-white w-6 h-6 ml-4"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <g fill="none">
              <path
                d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <Toaster position="bottom-center" />
    </Layout>
    // </Toaster>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.github.com/repos/remadex/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
