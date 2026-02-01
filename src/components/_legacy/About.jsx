import { ShieldCheck, Heart, Stethoscope, Sparkles } from "lucide-react";

const points = [
  {
    title: "Healthy & Ethical Pets",
    desc: "All pets are raised with care, proper nutrition, and hygiene. No unhealthy or unethical practices.",
    icon: ShieldCheck,
    color: "var(--primary-green)",
  },
  {
    title: "Love & Care First",
    desc: "We treat every pet like family. Their comfort, safety, and happiness always come first.",
    icon: Heart,
    color: "var(--accent-red)",
  },
  {
    title: "Guided by Experts",
    desc: "We provide proper guidance for vaccinations, diet, and basic health care.",
    icon: Stethoscope,
    color: "var(--accent-blue)",
  },
  {
    title: "Trusted Locally",
    desc: "A trusted name among pet lovers in the local community with happy customers.",
    icon: Sparkles,
    color: "var(--primary-orange)",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg-main)] py-20">
      {/* SAME CONTAINER AS NAVBAR */}
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
            About Us
          </span>

          <h2 className="font-[Nohemi] text-3xl sm:text-4xl font-bold text-[var(--primary-green)]">
            Why Choose Manokanma Pet World? 🐾
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Manokanma Pet World is more than just a pet shop.  
            We are a place where pets are loved, cared for, and matched with the
            right families.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((item, index) => {
            const Icon = item.icon;

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
                  className="w-12 h-12 flex items-center justify-center rounded-lg shrink-0"
                  style={{ backgroundColor: item.color + "26" }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-[Nohemi] font-semibold text-lg text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-14 text-center">
          <p className="text-[var(--text-secondary)]">
            Looking for a healthy pet or expert guidance?  
            <span className="font-semibold text-[var(--primary-orange)]">
              {" "}You’re in the right place.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
