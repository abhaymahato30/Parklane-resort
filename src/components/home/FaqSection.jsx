"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What types of rooms are available at Parklane Resort?",
    a: "We offer comfortable Deluxe Rooms and spacious Family Suites designed for couples, families, and group stays."
  },
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in is from 12:00 PM and check-out is until 11:00 AM. Early check-in may be available based on room availability."
  },
  {
    q: "Do you allow bookings for events and celebrations?",
    a: "Yes, we host birthday parties, family gatherings, and small events. You can contact us for customized arrangements."
  },
  {
    q: "Is food available at the resort?",
    a: "Yes, we provide delicious home-style food. You can also request special arrangements for groups and events."
  },
  {
    q: "Is parking available at the resort?",
    a: "Yes, we have ample parking space available for guests visiting the resort."
  },
  {
    q: "Is the resort suitable for families and kids?",
    a: "Absolutely. Our resort is designed for families with open spaces, peaceful surroundings, and a safe environment."
  },
  {
    q: "How can I book a room?",
    a: "You can easily book by calling us or messaging on WhatsApp. Our team will assist you with availability and pricing."
  },
  {
    q: "Do you provide group booking discounts?",
    a: "Yes, we offer special pricing for group bookings and longer stays. Please contact us directly for details."
  },
  {
    q: "Are pets allowed at the resort?",
    a: "Please contact us before booking regarding pets, as policies may vary depending on the type of stay."
  },
  {
    q: "Where is Parklane Resort located?",
    a: "Our resort is located in a peaceful natural setting, perfect for relaxation away from city noise. Exact location details are shared on booking."
  }
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
