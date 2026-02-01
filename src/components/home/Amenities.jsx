import { motion } from "framer-motion";
import {
  Wifi,
  Utensils,
  ParkingCircle,
  Flame,
  Trees,
  Waves,
} from "lucide-react";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-bgsection py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-textdark text-3xl sm:text-4xl font-bold font-serif"
        >
          Amenities & Facilities
        </motion.h2>

        <p className="mt-4 text-textdark max-w-2xl mx-auto opacity-80">
          Everything you need for a comfortable, relaxing, and memorable stay.
        </p>

        {/* Amenities Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {/* Amenity 1 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-bgmain p-8 rounded-2xl"
          >
            <Waves className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-lg font-semibold text-textdark">
              Swimming Pool
            </h3>
            <p className="mt-2 text-sm text-textdark opacity-80">
              Clean and spacious pool for relaxation and family enjoyment.
            </p>
          </motion.div>

          {/* Amenity 2 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-bgmain p-8 rounded-2xl"
          >
            <Utensils className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-lg font-semibold text-textdark">
              In-house Dining
            </h3>
            <p className="mt-2 text-sm text-textdark opacity-80">
              Delicious meals prepared with hygiene and quality ingredients.
            </p>
          </motion.div>

          {/* Amenity 3 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-bgmain p-8 rounded-2xl"
          >
            <Trees className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-lg font-semibold text-textdark">
              Lawn & Open Spaces
            </h3>
            <p className="mt-2 text-sm text-textdark opacity-80">
              Open green areas perfect for relaxation and small gatherings.
            </p>
          </motion.div>

          {/* Amenity 4 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-bgmain p-8 rounded-2xl"
          >
            <Flame className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-lg font-semibold text-textdark">
              Bonfire Evenings
            </h3>
            <p className="mt-2 text-sm text-textdark opacity-80">
              Enjoy cozy evenings with a bonfire under the open sky.
            </p>
          </motion.div>

          {/* Amenity 5 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-bgmain p-8 rounded-2xl"
          >
            <ParkingCircle className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-lg font-semibold text-textdark">
              Parking Facility
            </h3>
            <p className="mt-2 text-sm text-textdark opacity-80">
              Safe and spacious parking for all guests and visitors.
            </p>
          </motion.div>

          {/* Amenity 6 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-bgmain p-8 rounded-2xl"
          >
            <Wifi className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-lg font-semibold text-textdark">
              Free Wi-Fi
            </h3>
            <p className="mt-2 text-sm text-textdark opacity-80">
              Stay connected with complimentary high-speed internet.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
