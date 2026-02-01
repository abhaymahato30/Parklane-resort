import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[var(--primary-green)]
      "
    >
      <div className="flex flex-col items-center gap-6">

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Manokamna Pet World"
          className="h-24 w-auto"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* LOADING BAR */}
        <div className="relative h-1.5 w-52 overflow-hidden rounded-full bg-white/30">
          <motion.div
            className="
              absolute left-0 top-0 h-full w-1/3
              rounded-full
              bg-[var(--primary-orange)]
            "
            animate={{ x: ["-100%", "300%"] }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* TEXT */}
        <p className="text-xs tracking-widest text-white/80 uppercase">
          Preparing happy paws
        </p>
      </div>
    </motion.div>
  );
}
