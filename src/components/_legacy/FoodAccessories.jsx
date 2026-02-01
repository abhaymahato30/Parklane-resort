import {
  Bone,
  ShoppingBag,
  Pill,
  Dog,
  Cat,
  PawPrint,
} from "lucide-react";

const categories = [
  {
    title: "Dog Food",
    desc: "Premium and balanced nutrition for puppies and adult dogs.",
    icon: Dog,
    color: "var(--primary-green)",
    items: ["Dry Food", "Wet Food", "Puppy Formula", "Adult Nutrition"],
  },
  {
    title: "Cat Food",
    desc: "Nutritious food options for kittens and adult cats.",
    icon: Cat,
    color: "var(--accent-blue)",
    items: ["Dry Food", "Wet Food", "Kitten Food"],
  },
  {
    title: "Supplements",
    desc: "Health supplements to support immunity and growth.",
    icon: Pill,
    color: "var(--primary-orange)",
    items: ["Calcium", "Multivitamins", "Skin & Coat"],
  },
  {
    title: "Accessories",
    desc: "Daily essentials and comfort accessories for pets.",
    icon: ShoppingBag,
    color: "var(--accent-yellow)",
    items: ["Collars & Leashes", "Bowls", "Beds", "Toys"],
  },
];

export default function FoodAccessories() {
  return (
    <section id="food" className="bg-[var(--bg-main)] py-20">
      {/* SAME CONTAINER */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <span
            className="
              inline-block mb-4 px-4 py-2
              rounded-full text-sm font-medium
              bg-[var(--accent-yellow)]/40
              text-[var(--text-primary)]
            "
          >
            Pet Food & Accessories
          </span>

          <h2 className="font-[Nohemi] text-3xl sm:text-4xl font-bold text-[var(--primary-green)]">
            Everything Your Pet Needs 🦴🐾
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            From nutritious food to daily essentials, we stock trusted products
            to keep your pets healthy, active, and happy.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[var(--radius-xl)]
                  shadow-[var(--shadow-soft)]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {/* ICON */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: cat.color + "26" }}
                >
                  <Icon size={22} style={{ color: cat.color }} />
                </div>

                {/* TITLE */}
                <h3 className="font-[Nohemi] text-lg font-semibold text-[var(--text-primary)]">
                  {cat.title}
                </h3>

                {/* DESC */}
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {cat.desc}
                </p>

                {/* ITEMS */}
                <ul className="mt-4 space-y-1 text-sm">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[var(--text-secondary)]"
                    >
                      <PawPrint size={14} className="text-[var(--primary-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FOOT NOTE */}
        <div className="mt-14 text-center">
          <p className="text-[var(--text-secondary)]">
            Not sure what’s best for your pet?  
            <span className="font-semibold text-[var(--primary-orange)]">
              {" "}We’re happy to guide you.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
