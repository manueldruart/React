import Layout from '../components/Layout';
import PortfolioCarousel from '../components/PortfolioCarousel';

export default function Portfolio() {
  return (
    <Layout title="Skills" currentPage="portfolio">
      <h3 className="py-24 text-6xl flex justify-center w-full uppercase">Portfolio</h3>
      <div className="justify-between flex flex-wrap">
        <PortfolioCarousel />
      </div>
    </Layout>
  );
}
