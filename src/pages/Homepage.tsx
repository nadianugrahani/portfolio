import { AboutMeLayout } from "@/components/layouts/AboutMeLayout";
import { TimelinesLayout } from "@/components/layouts/TimelinesLayout";
import { HeroLayout } from "@/components/layouts/HeroLayout";

import Footer from "@/components/Footer";
import { FocusCards } from "@/components/FocusCards";

import {
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG7,
  IMG8,
  IMG9,
  IMG10,
  IMG11,
  IMG12,
  IMG13,
  IMG14
} from "@/assets";

const cards = [
  {
    title: "Picture 1",
    src: IMG1,
  },
  {
    title: "Picture 2",
    src: IMG2,
  },
  {
    title: "Picture 3",
    src: IMG3,
  },
  {
    title: "Picture 4",
    src: IMG4,
  },
  {
    title: "Picture 5",
    src: IMG5,
  },
  {
    title: "Picture 6",
    src: IMG6,
  },
  {
    title: "Picture 7",
    src: IMG7,
  },
  {
    title: "Picture 8",
    src: IMG8,
  },
  {
    title: "Picture 9",
    src: IMG9,
  },
  {
    title: "Picture 10",
    src: IMG10,
  },
  {
    title: "Picture 11",
    src: IMG11,
  },
  {
    title: "Picture 12",
    src: IMG12,
  },
  {
    title: "Picture 13",
    src: IMG13,
  },
  {
    title: "Picture 14",
    src: IMG14,
  },
];


const Homepage = () => {
  return (
    <main id="home">
      <HeroLayout />

      <section className="py-28" id="about">
        <AboutMeLayout />
      </section>

      <section id="experience">
        <TimelinesLayout />
      </section>

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          {/* Wrapper Header */}
          <div className="flex gap-6 justify-center items-center">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl mb-6 relative z-20 font-bold tracking-tight">
              Gallery
            </h2>
            <div className=" bg-gray-600 bg-opacity-10 w-full h-[2px] rounded-full mb-4"></div>
          </div>

          {/* Description */}
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
            This is a collection documentation of my experiences in various events, seminars, and workshops.
          </p>
        </div>
        <FocusCards cards={cards} />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Homepage;
