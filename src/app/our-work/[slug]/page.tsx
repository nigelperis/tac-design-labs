import Admiration from './components/admiration';
import Banner from './components/banner';
import CallToAction from './components/call-to-action';
import FeaturedVideos from './components/featured-videos';
import Highlights from './components/highlights';
import MainContent from './components/main-content';
import Testimonial from './components/testimonial';
import type { PageParams } from './model';

async function Page({ params }: PageParams) {
  const { slug } = await params;

  return (
    <div className="bg-[#EDD7C3] font-primary bg-blend-luminosity">
      <Banner work={slug} imagePath={`/works/${slug}-banner.png`} />
      <Highlights work={slug} />
      <MainContent work={slug} />
      <Testimonial work={slug} />
      <FeaturedVideos work={slug} />
      <Admiration work={slug} />
      <CallToAction work={slug} />
    </div>
  );
}

export default Page;
