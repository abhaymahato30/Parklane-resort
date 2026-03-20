import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    title: "Wedding समारोह",
    desc: "Grand wedding setup with decoration & catering",
    image: "/events/wedding.jpeg",
  },
  {
    title: "Farewell Party",
    desc: "Celebrate your farewell with music & lights",
    image: "/events/farewell.jpg",
  },
  {
    title: "Fresher Party",
    desc: "Welcome juniors with DJ & amazing vibe",
    image: "/events/fresher.jpg",
  },
  {
    title: "Birthday Celebration",
    desc: "Make birthdays memorable with decoration",
    image: "/events/birthday.webp",
  },
  {
    title: "Corporate Events",
    desc: "Meetings & team outings in peaceful space",
    image: "/events/corporate.jpeg",
  },
  {
    title: "Family Functions",
    desc: "Perfect for puja, anniversary & gatherings",
    image: "/events/family.jpeg",
  },
];

function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // AUTO IMAGE CHANGE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 2000); // change speed here

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2
            className="text-4xl sm:text-5xl mb-8"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Events & Celebrations
          </h2>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className="cursor-pointer group"
              >
                <h3
                  className={`
                    text-xl font-semibold transition
                    ${
                      activeIndex === index
                        ? "text-[#AD8B3A]"
                        : "text-black"
                    }
                  `}
                >
                  {event.title}
                </h3>

                <p className="text-black/60 text-sm mt-1">
                  {event.desc}
                </p>

                {/* underline */}
                <div
                  className={`
                    h-[2px] mt-2 bg-[#AD8B3A] transition-all duration-300
                    ${activeIndex === index ? "w-16" : "w-0"}
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">

          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={events[activeIndex].image}
              alt={events[activeIndex].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
              }}
            />
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default EventsSection;