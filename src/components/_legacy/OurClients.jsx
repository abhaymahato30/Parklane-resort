import { PawPrint, Heart } from "lucide-react";

const clients = [
  "Happy Pet Families",
  "First-Time Pet Owners",
  "Dog Lovers",
  "Cat Owners",
  "Local Pet Enthusiasts",
  "Repeat Customers",
];

export default function OurClients() {
  return (
    <section className="bg-[var(--bg-alt)] py-20">
      {/* SAME CONTAINER */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <span
            className="
              inline-block mb-4 px-4 py-2
              rounded-full text-sm font-medium
              bg-[var(--primary-green)]/15
              text-[var(--primary-green)]
            "
          >
            Our Clients
          </span>

          <h2 className="font-[Nohemi] text-3xl sm:text-4xl font-bold text-[var(--primary-green)]">
            Loved by Pet Families 🐶❤️
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            We are proud to serve pet lovers from all walks of life who trust us
            with their companions.
          </p>
        </div>

        {/* CLIENT TYPES GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[var(--radius-xl)]
                shadow-[var(--shadow-soft)]
                p-6
                flex items-center gap-4
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--accent-yellow)]/40">
                <PawPrint className="text-[var(--primary-green)]" size={22} />
              </div>

              <p className="font-[Nohemi] font-semibold text-[var(--text-primary)]">
                {client}
              </p>
            </div>
          ))}
        </div>

        {/* TRUST NOTE */}
        <div className="mt-14 text-center">
          <p className="text-[var(--text-secondary)] flex items-center justify-center gap-2">
            <Heart size={16} className="text-[var(--accent-red)]" />
            Every client leaves with care, guidance, and confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
