import { FaWhatsapp } from "react-icons/fa";

const rooms = [
  {
    title: "Deluxe Room",
    desc: "Perfect for couples with comfort and peaceful surroundings.",
  },
  {
    title: "Family Room",
    desc: "Spacious room designed for families and group stays.",
  },
  {
    title: "Premium Suite",
    desc: "Luxury stay with extra comfort for special occasions.",
  },
];

function RoomsPage() {
  return (
    <section className="bg-black text-white min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* HEADER */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Our Rooms
        </h1>

        <p className="text-white/70 mb-12">
          Comfortable and clean rooms for a relaxing stay.
        </p>

        {/* ROOMS */}
        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                {room.title}
              </h2>

              <p className="text-white/70 text-sm mb-6">
                {room.desc}
              </p>

              <a
                href="https://wa.me/919031821122"
                target="_blank"
                className="
                  inline-flex items-center gap-2
                  bg-[#AD8B3A]
                  px-4 py-2
                  rounded-lg
                  text-sm
                  font-medium
                  hover:bg-[#c5a14a]
                  transition
                "
              >
                <FaWhatsapp />
                Enquire
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RoomsPage;