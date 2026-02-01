import { PawPrint } from "lucide-react";

const WHATSAPP_NUMBER = "919525222218";

const pets = [
  {
    name: "Labrador Retriever",
    tag: "Popular",
    category: "Dog",
    quote: "A bundle of joy that fills your home with love 🤍",
    image: "https://www.keystonepuppies.com/wp-content/uploads/2024/06/image_123650291-1024x786.jpg",
  },
  {
    name: "German Shepherd",
    tag: "Available",
    category: "Dog",
    quote: "Loyal, brave, and always by your side 🛡️",
    image: "https://cdn-ilbfemn.nitrocdn.com/SMbNqQVgokVBOKPHqgPbhvowhPKWFJah/assets/images/optimized/rev-ad43a09/canna-pet.com/wp-content/uploads/2017/10/german-shepherd-dog-1071592_1920-1024x683.jpg",
  },
  {
    name: "Golden Retriever",
    tag: "Limited",
    category: "Dog",
    quote: "Pure hearts wrapped in golden fur ✨",
    image: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fda89d930fc320dd912a2a25487b9ca86b37fcdd6-800x600.jpg&w=1080&q=80",
  },
  {
    name: "Indian Spitz",
    tag: "Indian Breed",
    category: "Dog",
    quote: "Playful, fluffy, perfect for Indian homes 🇮🇳",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Indian_Spitz_Dog.jpg",
  },
  {
    name: "Rajapalayam",
    tag: "Indian Breed",
    category: "Dog",
    quote: "Graceful guardians with royal roots 👑",
    image: "https://3f2e02b097fb725604aee00dede93f77.cdn.bubble.io/cdn-cgi/image/w=512,h=341,f=auto,dpr=2.5,fit=contain,q=0/f1746718599233x208157647964052130/rajapalayam%20puppy.webp",
  },
  {
    name: "Persian Cat",
    tag: "Popular",
    category: "Cat",
    quote: "Soft, calm, and born to be pampered 😽",
    image: "https://pawpurrfect.co/wp-content/uploads/2023/01/Persian-cat-900x600.jpg",
  },
  {
    name: "British Shorthair",
    tag: "Limited",
    category: "Cat",
    quote: "Chubby cheeks and endless charm 💙",
    image: "https://www.happypawsus.com/cdn/shop/collections/goldenbsh1.png?v=1731425631",
  },
  {
    name: "Indian Desi Cat",
    tag: "Indian",
    category: "Cat",
    quote: "Independent, loving, and naturally smart 🐾",
    image: "https://supertails.com/cdn/shop/articles/main-900x600-1-900x600-1-900x600-1-900x600-1688123739700_1e4382f7-83fc-4e4e-aa2d-0d3921ea789f.jpg?v=1739267037",
  },
  {
    name: "Gir Cow",
    tag: "Desi Pride",
    category: "Cow",
    quote: "A symbol of purity, strength, and tradition 🌿",
    image: "https://girorganic.com/cdn/shop/articles/what-is-gir-cow-453725.jpg?v=1673547600",
  },
  {
    name: "Sahiwal Cow",
    tag: "High Milk",
    category: "Cow",
    quote: "Gentle nature with powerful nourishment 🥛",
    image: "https://esfqc9riepu.exactdn.com/wp-content/uploads/2019/12/sahiwal-cow.jpg",
  },
];

// 🎨 UNIQUE COLORS + STRONG HOVER
const styles = [
  { card: "from-pink-200 to-pink-300 hover:from-pink-300 hover:to-pink-400", btn: "bg-pink-700 hover:bg-pink-800" },
  { card: "from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400", btn: "bg-blue-700 hover:bg-blue-800" },
  { card: "from-yellow-200 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400", btn: "bg-yellow-700 hover:bg-yellow-800" },
  { card: "from-green-200 to-green-300 hover:from-green-300 hover:to-green-400", btn: "bg-green-700 hover:bg-green-800" },
  { card: "from-purple-200 to-purple-300 hover:from-purple-300 hover:to-purple-400", btn: "bg-purple-700 hover:bg-purple-800" },
  { card: "from-orange-200 to-orange-300 hover:from-orange-300 hover:to-orange-400", btn: "bg-orange-700 hover:bg-orange-800" },
  { card: "from-teal-200 to-teal-300 hover:from-teal-300 hover:to-teal-400", btn: "bg-teal-700 hover:bg-teal-800" },
  { card: "from-rose-200 to-rose-300 hover:from-rose-300 hover:to-rose-400", btn: "bg-rose-700 hover:bg-rose-800" },
  { card: "from-lime-200 to-lime-300 hover:from-lime-300 hover:to-lime-400", btn: "bg-lime-700 hover:bg-lime-800" },
  { card: "from-sky-200 to-sky-300 hover:from-sky-300 hover:to-sky-400", btn: "bg-sky-700 hover:bg-sky-800" },
];

export default function Pets() {
  return (
    <section id="pets" className="py-24 bg-[#f7fff9]">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--primary-green)] text-white font-semibold mb-4">
            <PawPrint size={16} />
            Our Lovely Companions
          </div>

          <h2 className="text-4xl font-bold">
            Where Every Pet Finds a Home 🐾
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet, i) => (
            <div
              key={i}
              className={`
                bg-gradient-to-br ${styles[i].card}
                rounded-3xl overflow-hidden
                transition-all duration-500
                hover:scale-[1.04]
                hover:shadow-2xl
                hover:ring-4 hover:ring-white/60
              `}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-3">
                  <span className="text-xs font-bold uppercase">
                    {pet.category}
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold">
                    {pet.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold">
                  {pet.name}
                </h3>

                <p className="mt-2 text-sm italic text-gray-800">
                  “{pet.quote}”
                </p>

<a
  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20am%20interested%20in%20${pet.name}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-6 block text-center py-3 rounded-xl
    font-extrabold text-base tracking-wide
    !text-white
    bg-green-900
    hover:bg-green-800
    border-2 border-white
  "
>
  Enquire on WhatsApp
</a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
