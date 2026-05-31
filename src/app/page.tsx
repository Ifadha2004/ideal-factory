import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Hero from "../components/sections/hero-section";
import InteriorSolutionsUnified from '../components/sections/InteriorSolutionsUnified';
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
        <InteriorSolutionsUnified />
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