import Card_temp_1 from '../components/Card_temp_1';
import Layout from '../components/Layout';

export default function Skills() {
  return (
    <Layout title="Skills" currentPage="skills">
      <h3 className="py-24 text-6xl flex justify-center w-full uppercase">Skills</h3>
      <div className="flex w-full flex-wrap ">        
        <Card_temp_1 />
      </div>
    </Layout>
  );
}

