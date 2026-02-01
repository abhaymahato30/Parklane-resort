"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Are the pets healthy and vaccinated?",
    a: "Yes. All pets are raised with proper care and hygiene. We provide guidance regarding vaccinations and basic health checks.",
  },
  {
    q: "Can we visit the shop before buying a pet?",
    a: "Absolutely. We encourage customers to visit our shop, see the pets, and interact with them before making a decision.",
  },
  {
    q: "Do you help with food and care guidance?",
    a: "Yes. We guide you on the right food, feeding schedule, and basic care tips to keep your pet healthy and happy.",
  },
  {
    q: "Do you sell pet food and accessories?",
    a: "Yes. We provide quality pet food, supplements, and essential accessories for dogs and other pets.",
  },
  {
    q: "Is after-sale support available?",
    a: "We are always available for guidance even after you take your pet home, especially for first-time pet owners.",
  },
  {
    q: "What types of pets are available?",
    a: "We mainly have a variety of dog breeds along with some small pets commonly kept in Indian households.",
  },
  {
    q: "How do I know which pet is right for me?",
    a: "We help you choose a pet based on your lifestyle, space, and experience level so both you and the pet are happy.",
  },
  {
    q: "Do you provide grooming services?",
    a: "Yes, we offer grooming and hygiene services to keep your pets clean, healthy, and comfortable.",
    },
  {
    q: "What are your shop timings?",
    a: "Our shop is open every day from 9:00 AM to 9:00 PM.",
  },
  {
    q: "How can I contact you?",
    a: "You can call us directly or message us on WhatsApp for quick responses and availability details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-28 bg-[var(--bg-alt)]">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-[Nohemi] text-4xl font-extrabold text-[var(--text-primary)]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)]">
            Everything you need to know before bringing a pet home.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="
                  rounded-xl
                  bg-white
                  border border-black/5
                  shadow-[var(--shadow-soft)]
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="
                    flex w-full items-center justify-between
                    px-6 py-5
                    text-left
                    text-[var(--text-primary)]
                  "
                >
                  <span className="text-base font-semibold">
                    {item.q}
                  </span>

                  <span
                    className={`
                      text-2xl font-light
                      text-[var(--primary-green)]
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
