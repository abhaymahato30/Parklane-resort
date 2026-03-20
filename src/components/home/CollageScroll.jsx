// import 24 images
import i1 from "../../assets/scroll/1.jpeg";
import i2 from "../../assets/scroll/2.jpeg";
import i3 from "../../assets/scroll/3.jpeg";
import i4 from "../../assets/scroll/38.jpeg";
import i5 from "../../assets/scroll/5.jpeg";
import i6 from "../../assets/scroll/6.jpeg";
import i7 from "../../assets/scroll/38.jpeg";
import i8 from "../../assets/scroll/8.jpeg";
import i9 from "../../assets/scroll/9.jpeg";
import i10 from "../../assets/scroll/10.jpeg";
import i11 from "../../assets/scroll/11.jpeg";
import i12 from "../../assets/scroll/36.jpeg";

import i13 from "../../assets/scroll/13.jpeg";
import i14 from "../../assets/scroll/47.jpeg";
import i15 from "../../assets/scroll/15.jpeg";
import i16 from "../../assets/scroll/16.jpeg";
import i17 from "../../assets/scroll/17.jpeg";
import i18 from "../../assets/scroll/18.jpeg";
import i19 from "../../assets/scroll/40.jpeg";
import i20 from "../../assets/scroll/20.jpeg";
import i21 from "../../assets/scroll/21.jpeg";
import i22 from "../../assets/scroll/22.jpeg";
import i23 from "../../assets/scroll/23.jpeg";
import i24 from "../../assets/scroll/41.jpeg";

export default function CollageScroll() {

  const row1 = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12];
  const row2 = [i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24];

  return (
  <section className="relative pt-16 pb-24 bg-white overflow-hidden">

  <div className="space-y-10">

    {/* ROW 1 */}
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-scroll-right gap-4">

        {[...row1, ...row1].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`gallery ${i}`}
            className="h-[160px] sm:h-[190px] w-auto rounded-xl object-cover"
          />
        ))}

      </div>
    </div>

    {/* ROW 2 */}
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-scroll-left gap-4">

        {[...row2, ...row2].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`gallery ${i}`}
            className="h-[160px] sm:h-[190px] w-auto rounded-xl object-cover"
          />
        ))}

      </div>
    </div>

  </div>
</section>
  );
}