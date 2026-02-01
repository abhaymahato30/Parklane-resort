import { Leaf, Home, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-bgsection py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-textdark text-3xl sm:text-4xl font-bold font-serif">
          Why Choose Parklane Resort
        </h2>

        <p className="mt-4 text-textdark max-w-2xl mx-auto opacity-80">
          We offer the perfect blend of comfort, nature, and warm hospitality
          to make your stay truly memorable.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-bgmain p-8 rounded-2xl text-center">
            <Leaf className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-xl font-semibold text-textdark">
              Peaceful Natural Location
            </h3>
            <p className="mt-2 text-textdark opacity-80 text-sm leading-relaxed">
              Surrounded by greenery, our resort offers a calm and refreshing
              escape from busy city life.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-bgmain p-8 rounded-2xl text-center">
            <Home className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-xl font-semibold text-textdark">
              Comfortable & Spacious Rooms
            </h3>
            <p className="mt-2 text-textdark opacity-80 text-sm leading-relaxed">
              Well-maintained rooms designed for families, couples, and groups
              to relax in complete comfort.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-bgmain p-8 rounded-2xl text-center">
            <Users className="mx-auto text-accent" size={36} />
            <h3 className="mt-4 text-xl font-semibold text-textdark">
              Family & Event Friendly
            </h3>
            <p className="mt-2 text-textdark opacity-80 text-sm leading-relaxed">
              Ideal for family outings, celebrations, and small events with
              attentive service and care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
