"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const items = [
  {
    title: "Healthy & Happy Pets",
    desc: "Every pet is raised with proper nutrition, hygiene, and care before reaching you.",
    icon: ShieldCheck,
  },
  {
    title: "Love Comes First",
    desc: "We believe pets are family. Their comfort and safety are always our top priority.",
    icon: HeartHandshake,
  },
  {
    title: "Guided Health Support",
    desc: "We provide guidance on vaccination, diet, and basic health care after adoption.",
    icon: Stethoscope,
  },
  {
    title: "Trusted by Pet Lovers",
    desc: "Loved and trusted by local families who value ethical and responsible pet care.",
    icon: Sparkles,
  },
];

export default function OurPromise() {
  return (
    <section
      className="
        bg-[var(--bg-alt)]
        py-32
        text-[var(--text-primary)]
      "
    >
      {/* HEADER */}
      <div className="mb-24 text-center max-w-[900px] mx-auto px-4 sm:px-6">
        <h2 className="font-[Nohemi] text-4xl sm:text-5xl font-extrabold text-[var(--primary-green)]">
          Our Promise to Every Pet & Family 🐾
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
          We focus on ethical care, long-term health, and helping pets find the
          right home — not just making a sale.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {/* Vertical line */}
        <div
          className="
            absolute left-1/2 top-0 h-full w-[4px]
            -translate-x-1/2
            bg-[var(--primary-green)]/20
          "
        />

        <div className="flex flex-col gap-28">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                {/* DOT */}
                <div
                  className="
                    absolute left-1/2 z-10 h-6 w-6
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-[var(--bg-alt)]
                    bg-[var(--primary-green)]
                  "
                />

                {/* CARD */}
                <div
                  className="
                    relative mt-6 w-full max-w-md
                    rounded-2xl
                    border border-black/5
                    bg-white
                    p-6
                    shadow-[var(--shadow-soft)]
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      absolute -top-5 left-6
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      bg-[var(--primary-green)]/15
                      text-[var(--primary-green)]
                      shadow-md
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-4 font-[Nohemi] text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
