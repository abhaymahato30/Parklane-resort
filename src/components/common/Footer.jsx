import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const callNow = () => {
    window.location.href = "tel:+919525222218";
  };

  const whatsappNow = () => {
    window.open("https://wa.me/919525222218", "_blank");
  };

  return (
    <footer className="bg-[var(--bg-main)] border-t border-black/5">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-4 text-center md:text-left">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="font-[Nohemi] text-2xl font-extrabold text-[var(--primary-green)]">
              Manokamna
              <span className="text-[var(--primary-orange)]"> Pet World</span>
            </h3>

            <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-md leading-relaxed mx-auto md:mx-0">
              A trusted destination for healthy pets, quality pet food,
              and responsible pet care. We believe every animal deserves
              love, care, and a happy home.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/manokamnapetworld/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-black/10
                           text-[var(--text-secondary)]
                           hover:text-[var(--primary-orange)]
                           transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/people/Manokamna-Pet-World/61577368480507/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-black/10
                           text-[var(--text-secondary)]
                           hover:text-[var(--primary-orange)]
                           transition"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-[Nohemi] font-semibold text-[var(--text-primary)] mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href="#pets" className="hover:text-[var(--primary-orange)]">Pets</a></li>
              <li><a href="#services" className="hover:text-[var(--primary-orange)]">Services</a></li>
              <li><a href="#reviews" className="hover:text-[var(--primary-orange)]">Reviews</a></li>
              <li><a href="#contact" className="hover:text-[var(--primary-orange)]">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-[Nohemi] font-semibold text-[var(--text-primary)] mb-4">
              Contact
            </h4>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-[var(--text-secondary)] mb-3">
              <Phone size={16} />
              +91 95252 22218
            </div>

            <div className="flex items-start justify-center md:justify-start gap-3 text-sm text-[var(--text-secondary)] mb-6">
              <MapPin size={16} className="mt-0.5" />
              <span>
                Panjar, Sasaram<br />
                Rohtas, Bihar – 802215
              </span>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex gap-3 justify-center w-full md:w-auto md:justify-start">
              <button
                onClick={callNow}
                className="
                  px-4 py-2 text-sm rounded-md font-semibold
                  bg-[var(--primary-orange)] text-white
                  hover:scale-[1.03] transition
                "
              >
                Call Now
              </button>

              <button
                onClick={whatsappNow}
                className="
                  px-4 py-2 text-sm rounded-md font-semibold
                  bg-green-600 text-white
                  border border-green-700
                  hover:bg-green-700
                  hover:scale-[1.03] transition
                "
              >
                <FaWhatsapp className="inline mr-1 text-white" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-black/5" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-between items-center text-xs text-[var(--text-secondary)] text-center md:text-left">
          <span>
            © {new Date().getFullYear()} Manokamna Pet World. All rights reserved.
          </span>

          <span>
            Designed with ❤️ for pet lovers
          </span>
        </div>
      </div>
    </footer>
  );
}
