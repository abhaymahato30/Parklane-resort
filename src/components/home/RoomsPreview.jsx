import { motion } from "framer-motion";

// IMAGES
import br1 from "../../assets/br1.webp";
import br2 from "../../assets/br2.webp";
import br3 from "../../assets/br5.webp";

export default function RoomsPreview() {

  const rooms = [
    {
      name: "Business Room",
      tagline: "Comfort with productivity",
      features: [
        "Pool view rooms",
        "Modern interiors",
        "Ideal for business & short stays"
      ],
      img: br1
    },
    {
      name: "Club Room",
      tagline: "Relax with an outdoor deck",
      features: [
        "Pool view with private deck",
        "Spacious seating area",
        "Perfect for couples & leisure stays"
      ],
      img: br2
    },
    {
      name: "Luxury Room",
      tagline: "Premium stay with balcony views",
      features: [
        "Pool view with private balcony",
        "Elegant interiors",
        "Best for premium experience"
      ],
      img: br3
    }
  ];

  return (
    <section id="rooms" className="bg-bgmain py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-serif">
            Our Rooms & Stays
          </h2>

          <p className="mt-4 text-black/80">
            Choose from a range of thoughtfully designed rooms for comfort, luxury, and relaxation.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {rooms.map((room, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={room.img}
                alt={room.name}
                className="
                  w-full h-[420px] object-cover
                  transition duration-[1200ms]
                  group-hover:scale-110
                "
              />

              {/* 🔥 LIGHTER OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/60 via-black/20 to-transparent
              " />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">

                <h3 className="text-2xl font-semibold !text-white">
                  {room.name}
                </h3>

                <p className="text-sm text-white/90 mt-1">
                  {room.tagline}
                </p>

                {/* FEATURES */}
                <ul className="mt-3 space-y-1 text-sm text-white/90">
                  {room.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                {/* 🔥 PREMIUM BUTTON */}
                <a
                  href="https://wa.me/919031821122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block mt-5
                       bg-[#AD8B3A] !text-white
                    border border-white/60
                  
                    px-6 py-2.5 
                    text-sm font-medium
                    backdrop-blur-md
                  
                   bg-whitetext-black
                    transition-all duration-300
                  "
                >
                  Enquire Now
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}