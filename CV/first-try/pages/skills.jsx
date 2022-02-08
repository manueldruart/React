import Card_temp_1 from '../components/Card_temp_2';
import Layout from '../components/Layout';

export default function Skills() {
  return (
    <Layout title="Skills" currentPage="skills">
      <h3 className="py-24 text-6xl flex justify-center w-full uppercase">Skills</h3>
      <div className="justify-between flex flex-wrap ">
        <Card_temp_1 />
        <Card_temp_1 />
        <Card_temp_1 />
        <Card_temp_1 />
        <Card_temp_1 />
        <Card_temp_1 />
      </div>
    </Layout>
  );
}
