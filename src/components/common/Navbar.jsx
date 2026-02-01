import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

/* 🔑 CHANGE NUMBER HERE ONLY */
const PHONE_NUMBER = "919031821122"; // countrycode + number

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const HERO_HEIGHT = 600;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > HERO_HEIGHT);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const callNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const whatsappNow = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}`, "_blank");
  };

  const navItemClass = (path) => `
    px-3 py-2 rounded-md text-sm sm:text-base font-medium
    transition-all duration-200
    ${
      location.pathname === path
        ? "text-bgmain bg-accent"
        : scrolled
        ? "text-textdark hover:bg-bgsection"
        : "text-textdark hover:bg-bgsection/60"
    }
  `;

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center px-3 sm:px-6 pt-2">
      <nav
        className={`
          w-full max-w-[1050px]
          rounded-2xl backdrop-blur-xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-bgmain/90 border border-bgsection shadow-md"
              : "bg-bgmain/70 border border-bgsection/60 shadow-lg"
          }
        `}
      >
        {/* MAIN BAR */}
        <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center cursor-pointer transition-transform hover:scale-[1.03]"
          >
            <img
              src={logo}
              alt="Parklane Resort Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 ml-6">
            <Link to="/" className={navItemClass("/")}>Home</Link>
            <Link to="/rooms" className={navItemClass("/rooms")}>Rooms</Link>
            <Link to="/amenities" className={navItemClass("/amenities")}>Amenities</Link>
            <Link to="/events" className={navItemClass("/events")}>Events</Link>
            <Link to="/gallery" className={navItemClass("/gallery")}>Gallery</Link>
            <Link to="/contact" className={navItemClass("/contact")}>Contact</Link>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex gap-2 ml-auto">
            <button
              onClick={callNow}
              className="
                inline-flex items-center gap-2
                bg-accent text-bgmain
                px-4 py-2.5 text-sm font-semibold
                rounded-lg
                transition-all hover:opacity-90
              "
            >
              <FiPhone />
              Call Now
            </button>

            <button
              onClick={whatsappNow}
              className="
                inline-flex items-center gap-2
                border border-accent text-textdark
                px-4 py-2.5 text-sm font-semibold
                rounded-lg
                hover:bg-accent hover:text-bgmain
                transition-all
              "
            >
              <FaWhatsapp />
              WhatsApp
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto text-xl text-textdark"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-4 sm:px-6 pb-4 pt-2">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setOpen(false)} className={navItemClass("/")}>Home</Link>
              <Link to="/rooms" onClick={() => setOpen(false)} className={navItemClass("/rooms")}>Rooms</Link>
              <Link to="/amenities" onClick={() => setOpen(false)} className={navItemClass("/amenities")}>Amenities</Link>
              <Link to="/events" onClick={() => setOpen(false)} className={navItemClass("/events")}>Events</Link>
              <Link to="/gallery" onClick={() => setOpen(false)} className={navItemClass("/gallery")}>Gallery</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className={navItemClass("/contact")}>Contact</Link>

              {/* MOBILE CTA */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={callNow}
                  className="flex-1 bg-accent text-bgmain py-2.5 rounded-lg font-semibold text-sm"
                >
                  Call
                </button>
                <button
                  onClick={whatsappNow}
                  className="flex-1 border border-accent text-textdark py-2.5 rounded-lg font-semibold text-sm hover:bg-accent hover:text-bgmain transition"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
