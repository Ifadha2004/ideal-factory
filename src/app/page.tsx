import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Hero from "../components/sections/hero-section";
// import InteriorSolutionsBanner from "../components/sections/InteriorSolutionsBanner";
// import SolutionsGridSection from "../components/sections/solutions-section";
import InteriorSolutionsUnified from '../components/sections/InteriorSolutionsUnified';
// import VideoShowcase from "../components/sections/VideoShowcase";
// import WhyChooseUs from "../components/sections/why-choose-section";
import WhyIdealFactory from "../components/sections/WhyIdealFactory";
import GallerySection from "../components/sections/gallery";
import FeatureBanner from "../components/sections/feature-banner";
import Testimonials from "../components/sections/testimonials";
import ContactSection from "../components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        {/* <InteriorSolutionsBanner />
        <SolutionsGridSection /> */}
        <InteriorSolutionsUnified />
        {/* <VideoShowcase /> */}
        {/* <WhyChooseUs /> */}
        <WhyIdealFactory />
        <GallerySection />
        <FeatureBanner />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}