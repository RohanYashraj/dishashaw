import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import SelectedWork from "@/components/sections/SelectedWork";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import BehindTheBrand from "@/components/sections/BehindTheBrand";
import Numbers from "@/components/sections/Numbers";
import Testimonials from "@/components/sections/Testimonials";
import Journal from "@/components/sections/Journal";
import InstaFeed from "@/components/sections/InstaFeed";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StitchDivider from "@/components/ui/StitchDivider";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <StitchDivider />
      <About />
      <Philosophy />
      <SelectedWork />
      <Process />
      <Gallery />
      <BehindTheBrand />
      <Numbers />
      <Testimonials />
      <Journal />
      <StitchDivider />
      <InstaFeed />
      <Contact />
      <Footer />
    </main>
  );
}
