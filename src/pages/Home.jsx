import Hero from "../components/home/Hero";
import CollageScroll from "../components/home/CollageScroll";
import WhyChooseUs from "../components/home/WhyChooseUs";
import RoomsPreview from "../components/home/RoomsPreview";
import Amenities from "../components/home/Amenities";
import Reviews from "../components/home/Reviews";
import StatsStrip from "../components/home/StatsStrip";
import FaqSection from "../components/home/FaqSection";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className="bg-bgmain text-textdark">
      <Hero />
      <CollageScroll />
      <WhyChooseUs />
      <RoomsPreview />
      <Amenities />
      <Reviews />
      <StatsStrip />
      <FaqSection />
      <Contact />
    </div>
  );
}
