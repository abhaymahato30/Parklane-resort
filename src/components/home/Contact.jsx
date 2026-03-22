import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-[70vh]
        flex items-center
        bg-gradient-to-br
        from-[var(--bg-alt)]
        to-white
      "
    >
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-xl">

          {/* LEFT */}
          <div className="flex items-center px-10 sm:px-14 py-14 bg-white">
            <div className="w-full max-w-md space-y-6">

              {/* TITLE */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                  Plan Your Stay
                </h2>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Book your stay, plan events, or reach out to us anytime.
                </p>
              </div>

              {/* INFO */}
              <div className="space-y-4 text-sm">

                {/* ADDRESS */}
                <div className="flex gap-3">
                  <MapPin size={20} className="text-[var(--primary-green)] shrink-0" />
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    <span className="font-medium text-[var(--text-primary)]">
                      Parklane Resort
                    </span>
                    <br />
                    Dhanbad, Jharkhand<br />
                    India
                  </p>
                </div>

                {/* PHONE */}
                <div className="flex gap-3">
                  <Phone size={20} className="text-[var(--primary-green)] shrink-0" />
                  <div className="text-[var(--text-secondary)]">
                    <a
                      href="tel:+919031821122"
                      className="font-medium text-[var(--text-primary)] hover:underline"
                    >
                      +91 90318 21122
                    </a>
                    <br />
                    <span className="text-xs">
                      Available for bookings & enquiries
                    </span>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-3">
                  <Mail size={20} className="text-[var(--primary-green)] shrink-0" />
                  <a
                    href="mailto:parklane.resort@gmail.com"
                    className="text-[var(--text-primary)] font-medium hover:underline"
                  >
                    parklane.resort@gmail.com
                  </a>
                </div>

              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-4 pt-2">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919031821122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5 py-3
                       bg-[#AD8B3A] !text-white
                    
                   
                    text-sm font-semibold
                    hover:opacity-90
                    transition
                  "
                >
                  Book on WhatsApp
                </a>

                {/* SOCIAL */}
                <div className="flex gap-3">

                  <a
                    href="https://www.instagram.com/parklane_resorts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-2 rounded-full
                      border border-gray-200
                      text-[var(--text-secondary)]
                      hover:text-[var(--text-primary)]
                      hover:border-gray-400
                    "
                  >
                    <Instagram size={18} />
                  </a>

                  {/* You can add FB later */}
                  <a
                    href="https://www.facebook.com/parklaneresort/"
                    className="
                      p-2 rounded-full
                      border border-gray-200
                      text-[var(--text-secondary)]
                      hover:text-[var(--text-primary)]
                      hover:border-gray-400
                    "
                  >
                    <Facebook size={18} />
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT : MAP */}
          <div className="relative w-full min-h-[360px] md:min-h-full">
            <iframe
              title="Parklane Resort Location"
              src="https://www.google.com/maps?q=23.8397806,86.4985015&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}