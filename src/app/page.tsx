import Benefits from "@/components/home/benefits";
import Activities from "@/components/home/activities";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Disposal from "@/components/home/disposal";
import Contact from "@/components/home/contact";
import Banner from "@/components/home/banner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Activities />
      <Banner />
      <Stats />
      <Benefits />
      <Disposal />
      <Contact />
    </div>
  );
}
