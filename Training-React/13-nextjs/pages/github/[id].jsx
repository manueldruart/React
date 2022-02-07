import Layout from '../../components/layout';

export default function Repo({ data }) {
  return (
    <Layout title="Repos" currentPage="github">
      <h1>Welcome to : {data.html_url} </h1>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.github.com/repos/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
