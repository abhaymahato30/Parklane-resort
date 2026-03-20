import { motion } from "framer-motion";
import {
  Utensils,
  Coffee,
  Bed,
  Waves,
  HeartHandshake,
  Building2,
  Briefcase,
} from "lucide-react";

export default function Amenities() {

  const amenities = [
    {
      icon: Waves,
      title: "Swimming Pool",
      desc: "Relax and refresh in our clean and spacious pool."
    },
    {
      icon: Utensils,
      title: "Restaurant",
      desc: "Enjoy delicious meals with quality ingredients."
    },
    {
      icon: Coffee,
      title: "Cafe Lounge",
      desc: "A perfect place to unwind with drinks and snacks."
    },
    {
      icon: Bed,
      title: "Luxury Rooms",
      desc: "Comfortable and well-designed rooms for a peaceful stay."
    },
    {
      icon: HeartHandshake,
      title: "Weddings & Events",
      desc: "Celebrate your special moments in a beautiful setting."
    },
    {
      icon: Building2,
      title: "Banquet Hall",
      desc: "Spacious hall for parties and gatherings."
    },
    {
      icon: Briefcase,
      title: "Conference Space",
      desc: "Professional setup for meetings and corporate events."
    }
  ];

  const firstSix = amenities.slice(0, 6);
  const lastOne = amenities[6];

  return (
    <section id="amenities" className="bg-bgsection py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-textdark text-3xl sm:text-4xl font-bold font-serif"
        >
          Amenities & Experiences
        </motion.h2>

        <p className="mt-4 text-textdark max-w-2xl mx-auto opacity-80">
          Enjoy a complete resort experience with dining, events, and luxury stays.
        </p>

        {/* GRID */}
        <div className="mt-16 space-y-10">

          {/* FIRST GRID (6 items) */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {firstSix.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
                >
                  <Icon className="mx-auto text-black" size={36} />
                  <h3 className="mt-5 text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* LAST CARD CENTERED */}
          <div className="flex justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3">
              {(() => {
                const Icon = lastOne.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
                  >
                    <Icon className="mx-auto text-black" size={36} />
                    <h3 className="mt-5 text-lg font-semibold text-black">
                      {lastOne.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {lastOne.desc}
                    </p>
                  </motion.div>
                );
              })()}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}