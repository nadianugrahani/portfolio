import { AboutMeLayout } from "@/components/layouts/AboutMeLayout";
import { TimelinesLayout } from "@/components/layouts/TimelinesLayout";
import { HeroLayout } from "@/components/layouts/HeroLayout";

import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <main id="home">
      <HeroLayout />

      <section className="py-40" id="about">
        <AboutMeLayout />
      </section>

      <section id="experience">
        <TimelinesLayout />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Homepage;
