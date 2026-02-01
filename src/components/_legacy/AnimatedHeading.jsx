import { useEffect, useRef, useState } from "react";

/* THEME-SAFE COLORS ONLY */
const COLORS = [
  "#8A784E", // accent (luxury)
  "#AEC8A4", // soft green
];

const DEFAULT_COLOR = "#3B3B1A"; // main text color

function AnimatedLine({ text, sizeClass, weightClass, autoAnimate }) {
  const letters = text.split("");

  const [colors, setColors] = useState(
    letters.map(() => DEFAULT_COLOR)
  );
  const [offsets, setOffsets] = useState(
    letters.map(() => 0)
  );

  const timers = useRef({});
  const animating = useRef(new Set());
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const getNewColor = (prev) => {
    const options = COLORS.filter(c => c !== prev);
    return options[Math.floor(Math.random() * options.length)];
  };

  const animateLetter = (index) => {
    if (letters[index] === " " || animating.current.has(index)) return;
    animating.current.add(index);

    setColors(prev => {
      const updated = [...prev];
      updated[index] = getNewColor(prev[index]);
      return updated;
    });

    if (timers.current[index]) {
      timers.current[index].forEach(clearTimeout);
    }

    const steps = [3, -3, 3, -3];
    const newTimers = [];

    steps.forEach((pos, i) => {
      newTimers.push(
        setTimeout(() => {
          setOffsets(prev => {
            const updated = [...prev];
            updated[index] = pos;
            return updated;
          });
        }, i * 140)
      );
    });

    newTimers.push(
      setTimeout(() => {
        setOffsets(prev => {
          const updated = [...prev];
          updated[index] = 0;
          return updated;
        });
        setColors(prev => {
          const updated = [...prev];
          updated[index] = DEFAULT_COLOR;
          return updated;
        });
        animating.current.delete(index);
      }, 700)
    );

    timers.current[index] = newTimers;
  };

  useEffect(() => {
    if (!autoAnimate) return;

    timeoutRef.current = setTimeout(() => {
      let idx;
      do {
        idx = Math.floor(Math.random() * letters.length);
      } while (letters[idx] === " ");
      animateLetter(idx);

      intervalRef.current = setInterval(() => {
        let index;
        do {
          index = Math.floor(Math.random() * letters.length);
        } while (letters[index] === " ");
        animateLetter(index);
      }, 4500);
    }, 1600);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [autoAnimate]);

  return (
    <div
      className={`
        ${sizeClass} ${weightClass}
        font-serif
        leading-tight sm:leading-[1.05]
        text-center md:text-left
        break-words
      `}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          onMouseEnter={() => animateLetter(i)}
          style={{
            color: colors[i],
            transform: `translateX(${offsets[i]}px)`,
            display: "inline-block",
            transition: "transform 0.18s ease, color 0.25s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

export default function AnimatedHeading() {
  return (
    <div className="select-none space-y-1 sm:space-y-0">
      {/* Line 1 */}
      <AnimatedLine
        text="Parklane Resort"
        sizeClass="text-[3rem] sm:text-[5.6rem] lg:text-[6.6rem]"
        weightClass="font-black"
        autoAnimate={true}
      />

      {/* Line 2 */}
      <AnimatedLine
        text="Comfort • Nature • Luxury"
        sizeClass="text-[2.2rem] sm:text-[3.6rem] lg:text-[4rem]"
        weightClass="font-bold"
        autoAnimate={false}
      />

      {/* Line 3 */}
      <AnimatedLine
        text="A Peaceful Retreat for Families & Couples"
        sizeClass="text-[1.4rem] sm:text-[2.2rem] lg:text-[2.6rem] mt-2"
        weightClass="font-medium"
        autoAnimate={false}
      />
    </div>
  );
}
