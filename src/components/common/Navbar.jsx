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
      <nav className="max-w-[1200px] mx-auto px-6 py-0.5 flex items-center">

        {/* LOGO */}
        <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="h-20 pt-2 object-contain"
          />
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 ml-10">

          {["Home","rooms","amenities","events","gallery","contact"].map((item) => (
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

        {/* CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-3 ml-auto">

          <button
            onClick={callNow}
            className={`
              flex items-center gap-2
              px-4 py-2  text-sm font-medium 
               hover:shadow-black hover:text-black
                  transition
                  cursor-pointer
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
              px-4 py-2  text-sm font-medium 
                 hover:bg-green-500 hover:border-green-500
                  transition
                  cursor-pointer
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

        {/* MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            md:hidden ml-auto text-2xl
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className={`${scrolled ? "bg-white" : "bg-black"} px-6 pb-6`}>
          <div className="flex flex-col gap-4 pt-4">

            {["home","rooms","amenities","events","gallery","contact"].map((item) => (
              <span
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setOpen(false);
                }}
                className={`
                  text-sm cursor-pointer
                  ${scrolled ? "text-black" : "text-white"}
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