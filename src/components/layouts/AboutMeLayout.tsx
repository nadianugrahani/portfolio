import { AboutMe } from "@/components/AboutMe";
import { testimonials } from "@/mocks";

export function AboutMeLayout() {
  return <AboutMe testimonials={testimonials} />;
}
