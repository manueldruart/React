import 'react-vertical-timeline-component/style.min.css';
import Layout from '../components/Layout';
import TimelineCareer from '../components/TimelineCareer';
import TimelineEducation from '../components/TimelineEducation';

export default function Career() {
  return (
    <Layout title="Skills" currentPage="career">
      <h3 className="py-24 text-6xl flex justify-center w-full uppercase">Career</h3>
      <div>
        <TimelineCareer />
      </div>
      <h3 className="py-24 text-6xl flex justify-center w-full uppercase">Education</h3>
      <div>
        <TimelineEducation />
      </div>
    </Layout>
  );
}
