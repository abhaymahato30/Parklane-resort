import collage1 from "../../assets/collage1.webp"; // first collage image
import collage2 from "../../assets/collage2.webp"; // second collage image

export default function CollageScroll() {
  return (
    <section className="relative pb-24 bg-white overflow-hidden">
      <div className="space-y-10">

        {/* ROW 1 — LEFT TO RIGHT */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-right gap-4">
            <img
              src={collage1}
              alt="Pet collage"
              className="h-[200px] sm:h-[240px] w-auto rounded-xl"
            />
            <img
              src={collage1}
              alt="Pet collage duplicate"
              className="h-[200px] sm:h-[240px] w-auto rounded-xl"
            />
          </div>
        </div>

        {/* ROW 2 — RIGHT TO LEFT */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-left gap-4">
            <img
              src={collage2}
              alt="Pet collage"
              className="h-[200px] sm:h-[240px] w-auto rounded-xl"
            />
            <img
              src={collage2}
              alt="Pet collage duplicate"
              className="h-[200px] sm:h-[240px] w-auto rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
