import { motion } from "framer-motion";
import heroImg from "../../assets/img3.webp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Parklane Resort"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY (THEME SAFE) */}
      <div className="absolute inset-0 bg-bgmain/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-center font-serif">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white text-[3rem] sm:text-[5rem] lg:text-[6rem] font-black leading-tight"
        >
          Parklane Resort
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-2 text-textdark text-[1.6rem] sm:text-[2.4rem] lg:text-[2.8rem] font-semibold"
        >
          Comfort • Nature • Luxury
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-textdark text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A peaceful retreat for families, couples, and celebrations —
          surrounded by nature and warm hospitality.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://wa.me/919031821122"
            target="_blank"
            className="bg-accent text-bgmain px-8 py-4 text-base font-semibold rounded-xl hover:opacity-90"
          >
            Book on WhatsApp
          </a>

          <a
            href="tel:9031821122"
            className="border-2 border-accent text-textdark px-8 py-4 text-base font-semibold rounded-xl hover:bg-accent hover:text-bgmain transition"
          >
            Call Now – 9031821122
          </a>
        </motion.div>
      </div>
    </section>
  );
}
