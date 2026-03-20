import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

const PHONE_NUMBER = "919031821122";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const callNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const whatsappNow = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}`, "_blank");
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-[1200px] mx-auto px-6 py-1 flex items-center">

        {/* LOGO */}
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="h-20 pt-2 object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 ml-10">

          {["home","rooms","amenities","events","gallery","contact"].map((item) => (
            <span
              key={item}
              onClick={() => scrollToSection(item)}
              className={`
                text-sm font-medium tracking-wide cursor-pointer transition
                ${
                  scrolled
                    ? "text-black hover:text-[#AD8B3A]"
                    : "text-white hover:text-gray-300"
                }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}

        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3 ml-auto">

          <button
            onClick={callNow}
            className={`
              flex items-center gap-2
              px-4 py-2 text-sm font-medium
              transition
              ${
                scrolled
                  ? "bg-[#AD8B3A] text-white"
                  : "bg-white text-black"
              }
            `}
          >
            <FiPhone size={16} />
            Call
          </button>

          <button
            onClick={whatsappNow}
            className={`
              flex items-center gap-2
              px-4 py-2 text-sm font-medium
              transition
              ${
                scrolled
                  ? "bg-[#AD8B3A] text-white"
                  : "bg-white text-black"
              }
            `}
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            md:hidden ml-auto text-2xl transition
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className={`
            ${scrolled ? "bg-white" : "bg-transparent"}
            backdrop-blur-md
            px-6 pb-6
            transition-all duration-500
          `}
        >
          <div className="flex flex-col items-center gap-5 pt-6">

            {["home","rooms","amenities","events","gallery","contact"].map((item) => (
              <span
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setOpen(false);
                }}
                className={`
                  text-base font-medium cursor-pointer transition
                  ${
                    scrolled
                      ? "text-black hover:text-[#AD8B3A]"
                      : "text-white hover:text-[#AD8B3A]"
                  }
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}