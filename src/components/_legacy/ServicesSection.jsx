import { Scissors, HeartPulse, Home, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Pet Grooming",
    desc: "Professional grooming to keep your pet clean, healthy, and happy.",
    icon: Scissors,
    color: "var(--accent-blue)",
  },
  {
    title: "Health Support",
    desc: "Vaccination guidance and basic health consultation support.",
    icon: HeartPulse,
    color: "var(--primary-green)",
  },
  {
    title: "Pet Boarding",
    desc: "Safe and comfortable boarding when you are away from home.",
    icon: Home,
    color: "var(--accent-yellow)",
  },
  {
    title: "Training Guidance",
    desc: "Basic training tips to help your pet grow disciplined and friendly.",
    icon: GraduationCap,
    color: "var(--primary-orange)",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--bg-main)] py-20">
      {/* SAME CONTAINER AS NAVBAR */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span
            className="
              inline-block mb-4 px-4 py-2
              rounded-full text-sm font-medium
              bg-[var(--accent-blue)]/20
              text-[var(--primary-green)]
            "
          >
            Our Services
          </span>

          <h2 className="font-[Nohemi] text-3xl sm:text-4xl font-bold text-[var(--primary-green)]">
            Complete Care for Your Pets ❤️
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
            From grooming to health guidance, we provide everything your pet
            needs under one roof.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[var(--radius-xl)]
                  shadow-[var(--shadow-soft)]
                  p-6
                  flex gap-4
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {/* ICON */}
                <div
                  className="flex items-center justify-center
                             w-12 h-12 rounded-lg shrink-0"
                  style={{ backgroundColor: service.color + "33" }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="font-[Nohemi] font-semibold text-lg text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
