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
        <div
          className="
            grid md:grid-cols-2
            rounded-3xl
            overflow-hidden
            bg-white
            shadow-xl
          "
        >
          {/* LEFT : CONTENT */}
          <div
            className="
              flex items-center
              px-10 sm:px-14
              py-14
              bg-white
            "
          >
            <div className="w-full max-w-md space-y-6">
              {/* TITLE */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                  Let’s Connect
                </h2>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Visit, call, or message us — we’re always happy to help.
                </p>
              </div>

              {/* INFO BLOCK */}
              <div className="space-y-4 text-sm">
                {/* ADDRESS */}
                <div className="flex gap-3">
                  <MapPin
                    size={20}
                    className="text-[var(--primary-green)] shrink-0"
                  />
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    <span className="font-medium text-[var(--text-primary)]">
                      Manokamna Pet World
                    </span>
                    <br />
                    Vill + Post: Panjar<br />
                    Sasaram – 802215<br />
                    Rohtas, Bihar
                  </p>
                </div>

                {/* PHONE */}
                <div className="flex gap-3">
                  <Phone
                    size={20}
                    className="text-[var(--primary-green)] shrink-0"
                  />
                  <div className="text-[var(--text-secondary)]">
                    <a
                      href="tel:+919525222218"
                      className="font-medium text-[var(--text-primary)] hover:underline"
                    >
                      +91 95252 22218
                    </a>
                    <br />
                    <span className="text-xs">
                      +91 82101 01486
                    </span>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-3">
                  <Mail
                    size={20}
                    className="text-[var(--primary-green)] shrink-0"
                  />
                  <a
                    href="mailto:manokamnapets@gmail.com"
                    className="text-[var(--text-primary)] font-medium hover:underline"
                  >
                    manokamnapets@gmail.com
                  </a>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://wa.me/919525222218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5 py-3
                    rounded-lg
                    bg-[var(--primary-green)]
                    text-white
                    text-sm font-semibold
                  
                    hover:text-white
                    transition-colors
                  "
                >
                  WhatsApp Us
                </a>

                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/manokamnapetworld/"
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

                  <a
                    href="https://www.facebook.com/people/Manokamna-Pet-World/61577368480507/"
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
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT : MAP */}
          <div className="relative w-full min-h-[360px] md:min-h-full">
            <iframe
              title="Manokamna Pet World Location"
              src="https://www.google.com/maps?q=Panjar,Sasaram,Rohtas,Bihar,802215&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
