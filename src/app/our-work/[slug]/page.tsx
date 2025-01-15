import Banner from './components/banner';
import Highlights from './components/highlights';
import MainContent from './components/main-content';
import type { PageParams } from './model';

async function Page({ params }: PageParams) {
  const { slug } = await params;

  return (
    <div className="bg-[#EDD7C3] font-primary bg-blend-luminosity">
      <Banner work={slug} imagePath={`/works/${slug}-banner.jpeg`} />
      <Highlights work={slug} />
      <MainContent work={slug} />
    </div>
  );
}

export default Page;
