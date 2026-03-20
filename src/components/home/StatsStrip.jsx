"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to, suffix = "", duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = duration * 60;

    const animate = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const current = Math.floor(from + (to - from) * progress);
      setValue(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function ResortStats() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        {/* CARD */}
        {[
          {
            value: 1500,
            suffix: "+",
            title: "Happy Guests",
            desc: "Families & visitors hosted with care"
          },
          {
            value: 11,
            suffix: "+",
            title: "Years of Hospitality",
            desc: "Experience in hosting memorable stays"
          },
          {
            value: 100,
            suffix: "%",
            title: "Guest Satisfaction",
            desc: "Clean, safe & comfortable stays"
          }
        ].map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-2xl
              py-12
              shadow-md
              border border-gray-100
              hover:shadow-xl
              transition
            "
          >

            <h3 className="text-5xl font-bold text-black">
              <Counter to={item.value} suffix={item.suffix} />
            </h3>

            <p className="mt-3 text-sm font-semibold text-black">
              {item.title}
            </p>

            <p className="mt-1 text-xs text-gray-600">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}