import Navbar from "../Navbar";
import Hero from "../Hero";

export function HeroLayout() {
  return (
    <div className="h-screen w-full bg-white bg-grid-small-black/[0.1] md:bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section>
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}
