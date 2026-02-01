import { motion } from "framer-motion";

export default function RoomsPreview() {
  return (
    <section id="rooms" className="bg-bgmain py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-textdark text-3xl sm:text-4xl font-bold font-serif"
        >
          Our Comfortable Rooms
        </motion.h2>

        <p className="mt-4 text-textdark max-w-2xl mx-auto opacity-80">
          Designed to provide comfort, space, and relaxation for every guest.
        </p>

        {/* Room Cards */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2">

          {/* Room 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bgsection rounded-2xl overflow-hidden"
          >
            <div className="h-56 bg-accent/20 flex items-center justify-center">
              <span className="text-textdark font-semibold">
                Room Image
              </span>
            </div>

            <div className="p-8 text-left">
              <h3 className="text-xl font-semibold text-textdark">
                Deluxe Room
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-textdark opacity-80">
                <li>• Ideal for couples & small families</li>
                <li>• Comfortable bedding & clean interiors</li>
                <li>• Peaceful view and fresh surroundings</li>
              </ul>

              <a
                href="https://wa.me/919031821122"
                target="_blank"
                className="inline-block mt-6 bg-accent text-bgmain px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Room 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-bgsection rounded-2xl overflow-hidden"
          >
            <div className="h-56 bg-accent/20 flex items-center justify-center">
              <span className="text-textdark font-semibold">
                Room Image
              </span>
            </div>

            <div className="p-8 text-left">
              <h3 className="text-xl font-semibold text-textdark">
                Family Suite
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-textdark opacity-80">
                <li>• Spacious rooms for families & groups</li>
                <li>• Extra comfort with ample seating</li>
                <li>• Perfect for longer and relaxed stays</li>
              </ul>

              <a
                href="https://wa.me/919031821122"
                target="_blank"
                className="inline-block mt-6 bg-accent text-bgmain px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
