import { About } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { FeaturedProperties } from "@/components/featured-properties";
import { Hero } from "@/components/hero";
import { RedSection } from "@/components/red-section";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <div className="relative space-y-24">
        <Services />
        <RedSection />
        <About />
      </div>
      <FeaturedProperties />
      <Expertise />
      <Reviews />
      <ContactSection />
    </>
  );
}
