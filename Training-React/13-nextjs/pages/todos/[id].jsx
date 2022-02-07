import Layout from '../../components/layout';

export default function Todo({ data }) {
  return (
    <Layout title="Todos - Todo" currentPage="todos">
      <h1>Welcome on the todo: {data.title}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
