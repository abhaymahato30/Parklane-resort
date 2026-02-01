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

export default function PetStats() {
  return (
    <section className="py-24 bg-[var(--bg-alt)]">
      <div
        className="
          mx-auto
          max-w-[1000px]
          px-4 sm:px-6
          grid
          grid-cols-1
          gap-10
          text-center
          md:grid-cols-3
        "
      >
        {/* STAT 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            bg-white
            rounded-2xl
            py-10
            shadow-[var(--shadow-soft)]
          "
        >
          <h3 className="text-5xl font-extrabold text-[var(--primary-green)] font-[Nohemi]">
            <Counter to={300} suffix="+" />
          </h3>
          <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
            Trusted Happy Families
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Pets placed in loving homes
          </p>
        </motion.div>

        {/* STAT 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            bg-white
            rounded-2xl
            py-10
            shadow-[var(--shadow-soft)]
          "
        >
          <h3 className="text-5xl font-extrabold text-[var(--primary-green)] font-[Nohemi]">
            <Counter to={5} suffix="+" />
          </h3>
          <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
            Years of Pet Care Experience
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Knowledge built with care & trust
          </p>
        </motion.div>

        {/* STAT 3 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            bg-white
            rounded-2xl
            py-10
            shadow-[var(--shadow-soft)]
          "
        >
          <h3 className="text-5xl font-extrabold text-[var(--primary-green)] font-[Nohemi]">
            <Counter to={100} suffix="%" />
          </h3>
          <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
            Health & Hygiene Commitment
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Clean, safe & responsible care
          </p>
        </motion.div>
      </div>
    </section>
  );
}
