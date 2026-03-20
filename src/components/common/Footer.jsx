import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const PHONE = "919031821122";

  const callNow = () => {
    window.location.href = `tel:${PHONE}`;
  };

  const whatsappNow = () => {
    window.open(`https://wa.me/${PHONE}`, "_blank");
  };

  return (
    <footer className="bg-black !text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-3 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold font-serif !text-white">
              Parklane Resort
            </h3>

            <p className="mt-4 text-sm text-white leading-relaxed max-w-md mx-auto md:mx-0">
              A peaceful destination where comfort meets nature.
              Perfect for stays, celebrations, and unforgettable memories.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              
              <a
                href="https://www.instagram.com/parklane_resorts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border !text-[#AD8B3A] border-white/30 hover:bg-white hover:text-black transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full border !text-[#AD8B3A] border-white/30 hover:bg-white hover:text-black transition"
              >
                <FaFacebook size={16} />
              </a>

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4 !text-white">
              Explore
            </h4>

            <ul className="space-y-3 text-sm text-[#AD8B3A]">

              <li><a href="#hero" className="hover:underline !text-[#AD8B3A]">Home</a></li>
              <li><a href="#rooms" className="hover:underline !text-[#AD8B3A]">Rooms</a></li>
              <li><a href="#amenities" className="hover:underline !text-[#AD8B3A]">Amenities</a></li>
              <li><a href="#events" className="hover:underline !text-[#AD8B3A]">Events</a></li>
              {/* <li><a href="#gallery" className="hover:underline !text-[#AD8B3A]">Gallery</a></li> */}
              <li><a href="#contact" className="hover:underline !text-[#AD8B3A]">Contact</a></li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 !text-white">
              Contact
            </h3>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-white mb-3">
              <Phone size={16} />
              +91 90318 21122
            </div>

            <div className="flex items-start justify-center md:justify-start gap-3 text-sm text-white mb-6">
              <MapPin size={16} className="mt-0.5" />
              <span>
                Parklane Resort<br />
                Dhanbad, Jharkhand
              </span>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 justify-center md:justify-start">

              <button
                onClick={callNow}
                className="
                  px-5 py-2 text-sm
                  border border-white/40
                      bg-[#AD8B3A] text-white
               
                  hover:bg-white hover:text-black
                  transition
                  cursor-pointer
                "
              >
                Call
              </button>

              <button
                onClick={whatsappNow}
                className="
                  px-5 py-2 text-sm
                  border border-white/40
                     bg-[#AD8B3A] text-white
                  hover:bg-green-500 hover:border-green-500
                  transition
                  cursor-pointer
                "
              >
                <FaWhatsapp className="inline mr-1" />
                WhatsApp
              </button>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/20" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white text-center md:text-left gap-2">
          <span>
            © {new Date().getFullYear()} Parklane Resort. All rights reserved.
          </span>

          <span>
            Designed for comfort & luxury stays
          </span>
        </div>

      </div>
    </footer>
  );
}