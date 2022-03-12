import Layout from '../components/Layout';
import Home from '../components/Home';
export default function Index() {
  return <Layout title="Home" currentPage="home">
    <div className=''>
      <Home />
    </div>
  </Layout>;
}
