import { FaWhatsapp } from "react-icons/fa";

const rooms = [
  {
    title: "Deluxe Room",
    subtitle: "Perfect for couples & small families",
    features: [
      "Comfortable double bed",
      "Clean attached bathroom",
      "Peaceful surroundings",
      "Ideal for short stays",
    ],
    image: "/room-placeholder.jpg",
  },
  {
    title: "Family Room",
    subtitle: "Spacious & comfortable for families",
    features: [
      "Extra space for families",
      "Multiple bedding options",
      "Relaxing interiors",
      "Best for group stays",
    ],
    image: "/room-placeholder.jpg",
  },
  {
    title: "Premium Suite",
    subtitle: "Luxury stay with extra comfort",
    features: [
      "Large premium room",
      "Enhanced comfort & privacy",
      "Ideal for special occasions",
      "Top choice for couples",
    ],
    image: "/room-placeholder.jpg",
  },
];

export default function RoomsPage() {
  return (
    <section className="bg-bgmain min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-textdark">
            Our Rooms
          </h1>
          <p className="mt-4 text-textdark/80 max-w-2xl mx-auto">
            Comfortable, clean, and thoughtfully designed rooms for couples,
            families, and groups.
          </p>
        </div>

        {/* ROOMS GRID */}
        <div className="grid gap-12 md:grid-cols-3">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-bgsection rounded-2xl overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-56 bg-bgmain flex items-center justify-center text-textdark/50">
                {/* Replace with real room image later */}
                <span>Room Image</span>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold text-textdark">
                  {room.title}
                </h2>

                <p className="mt-1 text-textdark/70 text-sm">
                  {room.subtitle}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-textdark/80 flex-1">
                  {room.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/919031821122"
                  target="_blank"
                  className="
                    mt-8 inline-flex items-center justify-center gap-2
                    bg-accent text-bgmain
                    px-6 py-3
                    rounded-xl
                    font-semibold
                    text-sm
                    hover:opacity-90
                  "
                >
                  <FaWhatsapp size={18} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <p className="mt-16 text-center text-sm text-textdark/70">
          📞 Call or WhatsApp us for pricing, availability, and custom stay
          requirements.
        </p>
      </div>
    </section>
  );
}
