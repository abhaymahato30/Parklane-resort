import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import hero1 from "../../assets/img1.webp";
import hero2 from "../../assets/img4.webp";
import hero3 from "../../assets/img5.webp";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  /* IMAGE CHANGE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* TYPING EFFECT FOR LUXURY */
  const word = "Luxury";
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 120;

    if (charIndex < word.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + word[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const restart = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
      }, 2000);

      return () => clearTimeout(restart);
    }
  }, [charIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGES */}
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt="Parklane Resort"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* CONTENT */}
      <div
        className="
          relative z-10 max-w-4xl px-6 text-center font-serif
          pt-24 sm:pt-0
        "
      >
        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            !text-white
            text-[2.5rem] sm:text-[5rem] lg:text-[6rem]
            font-bold
            leading-tight
            tracking-wide
          "
          style={{
            fontFamily: "'Great Vibes', cursive",
            textShadow: "0 6px 30px rgba(0,0,0,0.8)",
          }}
        >
          Parklane Resort
        </motion.h1>

        {/* TAGLINE */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-4 sm:mt-6
            !text-white
            text-[1.4rem] sm:text-[2.5rem] lg:text-[3rem]
            font-medium
            tracking-wide
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            textShadow: "0 4px 20px rgba(0,0,0,0.7)",
          }}
        >
          Comfort • Nature •{" "}
          <span className="!text-white inline-block">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="
            mt-4 sm:mt-6
            !text-white
            text-sm sm:text-lg
            max-w-2xl mx-auto
            leading-relaxed
          "
        >
          A peaceful retreat for families, couples, and celebrations —
          surrounded by nature and warm hospitality.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center"
        >
          <a
            href="https://wa.me/919031821122"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#AD8B3A] !text-white
              px-5 py-2.5 sm:px-8 sm:py-4
              text-sm sm:text-base
              rounded-sm
              font-semibold
              shadow-lg
              hover:scale-105
              hover:bg-[#c5a14a]
              transition
            "
          >
            Book on WhatsApp
          </a>

          <a
            href="tel:9031821122"
            className="
              bg-[#AD8B3A] !text-white
              px-5 py-2.5 sm:px-8 sm:py-4
              text-sm sm:text-base
              rounded-sm
              font-semibold
              shadow-lg
              hover:scale-105
              hover:bg-[#c5a14a]
              transition
            "
          >
            Call Now – 9031821122
          </a>
        </motion.div>
      </div>
    </section>
  );
}