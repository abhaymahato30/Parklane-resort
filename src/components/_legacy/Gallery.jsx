"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  "VID-20250618-WA0010.mp4",
  "VID-20250619-WA0007.mp4",
  "VID-20250619-WA0009.mp4",
  "VID-20250619-WA0010.mp4",
  "VID-20250619-WA0011.mp4",
  "VID-20250619-WA0013.mp4",
  "VID-20250619-WA0014.mp4",
  "VID-20250619-WA0016.mp4",
  "VID-20250619-WA0018.mp4",
  "VID-20250620-WA0042.mp4",
  "VID-20250620-WA0043.mp4",
  "VID-20250620-WA0045.mp4",
  "VID-20250620-WA0046.mp4",
  "VID-20250620-WA0049.mp4",
  "VID-20250620-WA0050.mp4",
  "VID-20250620-WA0063.mp4",
  "VID-20250620-WA0064.mp4",
  "VID-20250620-WA0065.mp4",
  "VID-20250620-WA0067.mp4",
  "VID-20250620-WA0070.mp4",
  "VID-20250620-WA0071.mp4",
  "VID-20250620-WA0073.mp4",
  "VID-20250620-WA0075.mp4",
  "VID-20250620-WA0078.mp4",
  "VID-20250620-WA0080.mp4",
  "VID-20250620-WA0086.mp4",
];

// 🔥 HOT / WARM gradients only
const hotGradients = [
  "from-orange-500 via-amber-400 to-yellow-400",
  "from-red-500 via-orange-500 to-amber-400",
  "from-rose-500 via-red-500 to-orange-400",
  "from-amber-500 via-yellow-400 to-orange-400",
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  const INITIAL_COUNT = 6;
  const visibleVideos = showAll ? videos : videos.slice(0, INITIAL_COUNT);

  return (
    <section className="py-32 bg-[var(--bg-alt)]">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADING */}
        <div className="mb-20 text-center">
          <h2
            className="
              text-4xl sm:text-5xl
              font-extrabold
              tracking-tight
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[var(--primary-orange)]
              to-[var(--primary-green)]
            "
          >
            A Day at Manokamna Pet World
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-[var(--primary-orange)]" />

          <p className="mt-6 text-[var(--text-secondary)] max-w-xl mx-auto">
            Real moments from our pet store environment
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {visibleVideos.map((video, i) => (
            <div
              key={i}
              className={`
                p-[10px]
                rounded-3xl
                bg-gradient-to-tr ${hotGradients[i % hotGradients.length]}
                hot-border
                transition-transform duration-300
                hover:scale-[1.05]
              `}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black">

                {/* PLAY OVERLAY */}
                {playingIndex !== i && (
                  <div
                    onClick={() => setPlayingIndex(i)}
                    className="
                      absolute inset-0 z-10
                      flex items-center justify-center
                      bg-black/30
                      cursor-pointer
                    "
                  >
                    <div
                      className="
                        flex items-center justify-center
                        w-16 h-16
                        rounded-full
                        bg-[var(--primary-orange)]
                        shadow-2xl
                        transition-transform
                        hover:scale-110
                      "
                    >
                      <Play size={30} className="text-white ml-1" />
                    </div>
                  </div>
                )}

                <video
                  src={`/videos/${video}`}
                  controls
                  preload={showAll || i < INITIAL_COUNT ? "metadata" : "none"}
                  onPlay={() => setPlayingIndex(i)}
                  onPause={() => setPlayingIndex(null)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE – DESKTOP & MOBILE VISIBLE */}
        {!showAll && videos.length > INITIAL_COUNT && (
          <div className="mt-24 flex justify-center">
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-full shadow-xl">
              <button
                onClick={() => setShowAll(true)}
                className="
                  px-14 py-4
                  rounded-full
                  bg-[var(--primary-orange)]
                  text-white
                  font-extrabold
                  tracking-wide
                  shadow-2xl
                  hover:bg-[var(--primary-green)]
                  hover:scale-105
                  transition-all
                "
              >
                View More Videos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* BORDER ANIMATION */}
      <style>
        {`
          .hot-border {
            background-size: 200% 200%;
            animation: hotShift 7s ease infinite;
          }

          @keyframes hotShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}
