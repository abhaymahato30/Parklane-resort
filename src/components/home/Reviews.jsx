// Corrected asset paths (2 levels up)
import logo from "../../assets/logo.png";

// Import review images
import r1 from "../../assets/review/1.png";
import r2 from "../../assets/review/2.png";
import r3 from "../../assets/review/3.png";
import r4 from "../../assets/review/4.png";
import r5 from "../../assets/review/5.png";
import r6 from "../../assets/review/6.png";
import r7 from "../../assets/review/7.png";
import r8 from "../../assets/review/8.png";

const reviews = [r1, r2, r3, r4, r5, r6, r7, r8];

export default function Reviews() {
  return (
    <section className="py-20 bg-bgsection overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Parklane Resort"
              className="h-10 w-auto"
            />
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-textdark">
              Loved by Our Guests ❤️
            </h2>
          </div>

          <p className="text-textdark/80 italic max-w-xl mx-auto">
            “Real experiences shared by families, couples, and guests who stayed with us.”
          </p>
        </div>

        {/* SCROLLING REVIEWS */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...reviews, ...reviews].map((img, i) => (
              <div
                key={i}
                className="
                  min-w-[260px] sm:min-w-[330px] lg:min-w-[400px]
                  h-[300px] sm:h-[380px] lg:h-[460px]
                  bg-bgmain
                  rounded-2xl
                  border border-bgsection
                  flex items-center justify-center
                  overflow-hidden
                "
              >
                <img
                  src={img}
                  alt={`Guest review ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SCROLL ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
