import logo from "../../assets/logo.png";

// Import ALL 14 images
import r1 from "../../assets/review/1.jpeg";
import r2 from "../../assets/review/2.jpeg";
import r3 from "../../assets/review/3.jpeg";
import r4 from "../../assets/review/4.jpeg";
import r5 from "../../assets/review/5.jpeg";
import r6 from "../../assets/review/6.jpeg";
import r7 from "../../assets/review/7.jpeg";
import r8 from "../../assets/review/8.jpeg";
import r9 from "../../assets/review/9.jpeg";
import r10 from "../../assets/review/10.jpeg";
import r11 from "../../assets/review/11.jpeg";
import r12 from "../../assets/review/12.jpeg";
import r13 from "../../assets/review/13.jpeg";
import r14 from "../../assets/review/14.jpeg";

const reviews = [
  r1, r2, r3, r4, r5, r6, r7,
  r8, r9, r10, r11, r12, r13, r14
];

export default function Reviews() {
  return (
    <section className="py-24 bg-bgsection overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-14 px-6">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src={logo} alt="Parklane Resort" className="h-10 w-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-textdark">
            Loved by Our Guests ❤️
          </h2>
        </div>

        <p className="text-textdark/80 italic max-w-xl mx-auto">
          “Real experiences shared by families, couples, and guests who stayed with us.”
        </p>
      </div>

      {/* FULL WIDTH SCROLLER */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-6 animate-scroll px-4">

          {[...reviews, ...reviews].map((img, i) => (
            <div
              key={i}
              className="
                min-w-[210px] sm:min-w-[260px] lg:min-w-[320px]
                h-[240px] sm:h-[300px] lg:h-[370px]
                bg-bgmain
                rounded-xl
                border border-bgsection
                overflow-hidden
                flex-shrink-0
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

      {/* SCROLL ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 22s linear infinite;
          }
        `}
      </style>

    </section>
  );
}