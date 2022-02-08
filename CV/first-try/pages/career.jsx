import Timeline from '../components/Timeline';
import 'react-vertical-timeline-component/style.min.css';
import Layout from '../components/Layout';

export default function Career() {
  return (
    <Layout title="Skills" currentPage="career">
      <h3 className="py-24 text-6xl flex justify-center w-full uppercase">Career</h3>
      <div>
        <Timeline />
      </div>
    </Layout>
  );
}
