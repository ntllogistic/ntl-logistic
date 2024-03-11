import Banner from "@/components/home/banner";
import Disposal from "@/components/home/disposal";
import Stats from "@/components/home/stats";

export default function About() {
  return (
    <div>
      <Banner hideTopArrow />
      <Stats />
      <Disposal />
    </div>
  );
}
