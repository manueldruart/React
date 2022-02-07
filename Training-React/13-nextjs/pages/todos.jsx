import Link from 'next/link';
import Layout from '../components/layout';

export default function Todos({ data }) {
  return (
    <Layout title="Todo" currentPage="todos">
      <h1 className="border-b-2 border-b-indigo-600 pb-2 text-4xl mb-8">
        Listing des todos
      </h1>
      <ul>
        {data.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between pb-8 font-semibold text-xl w-3/4">
            {todo.title}
            <Link href={`/todos/${todo.id}`}>
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
