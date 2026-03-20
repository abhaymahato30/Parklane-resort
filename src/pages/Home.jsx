import Hero from "../components/home/Hero";
import CollageScroll from "../components/home/CollageScroll";
import EventsSection from "../components/home/Events";
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

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* GALLERY / SCROLL */}
      <section id="gallery">
        <CollageScroll />
      </section>

      {/* EVENTS */}
      <section id="events">
        <EventsSection />
      </section>

      {/* WHY CHOOSE US */}
      <section id="why">
        <WhyChooseUs />
      </section>

      {/* ROOMS */}
      <section id="rooms">
        <RoomsPreview />
      </section>

      {/* AMENITIES */}
      <section id="amenities">
        <Amenities />
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* STATS */}
      <section id="stats">
        <StatsStrip />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FaqSection />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}