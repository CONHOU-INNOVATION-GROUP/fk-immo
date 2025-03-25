import { About } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { FeaturedProperties } from "@/components/featured-properties";
import { Hero } from "@/components/hero";
import { Property } from "@/components/propertie";
import { RedSection } from "@/components/red-section";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import HeroGeometric from "@/components/strollAnimation";

export default function Home() {
  return (
    <>
      <Hero />
     
      <Stats />
      <Property />
      
      <div className="relative space-y-24">
        <Services />
        <HeroGeometric />
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
