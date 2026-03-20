// import { motion } from "framer-motion";

// // IMPORT YOUR EVENT IMAGES
// import e1 from "../../assets/events/1.webp";
// import e2 from "../../assets/events/2.webp";
// import e3 from "../../assets/events/3.webp";
// import e4 from "../../assets/events/4.webp";
// import e5 from "../../assets/events/5.webp";
// import e6 from "../../assets/events/6.webp";

// export default function EventsSection() {

//   const row1 = [e1, e2, e3, e4, e5, e6];
//   const row2 = [e6, e5, e4, e3, e2, e1];

//   return (
//     <section className="relative py-32 bg-bgmain overflow-hidden">

//       {/* HEADING */}
//       <div className="text-center mb-16">
//         <h2 className="text-white text-3xl sm:text-4xl font-bold font-serif">
//           Events & Weddings
//         </h2>
//       </div>

//       {/* SCROLL AREA */}
//       <div className="space-y-8">

//         {/* ROW 1 */}
//         <div className="overflow-hidden">
//           <div className="flex w-max animate-scroll-left gap-6">
//             {[...row1, ...row1].map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt="event"
//                 className="
//                   h-[220px] sm:h-[260px]
//                   w-[320px] sm:w-[380px]
//                   object-cover
//                   rounded-xl
//                   transition duration-500
//                   hover:scale-105
//                 "
//               />
//             ))}
//           </div>
//         </div>

//         {/* ROW 2 */}
//         <div className="overflow-hidden">
//           <div className="flex w-max animate-scroll-right gap-6">
//             {[...row2, ...row2].map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt="event"
//                 className="
//                   h-[220px] sm:h-[260px]
//                   w-[320px] sm:w-[380px]
//                   object-cover
//                   rounded-xl
//                   transition duration-500
//                   hover:scale-105
//                 "
//               />
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* ✨ FLOATING CURSIVE TEXT */}
//       <div className="
//         absolute inset-0
//         flex items-center justify-center
//         pointer-events-none
//       ">
//         <h3 className="
//           text-white text-3xl sm:text-5xl
//           opacity-90
//           tracking-wide
//           font-[cursive]   /* replace with real font */
//         ">
//           Plan Your Event
//         </h3>
//       </div>

//       {/* ANIMATION */}
//       <style>
//         {`
//           @keyframes scroll-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }

//           @keyframes scroll-right {
//             0% { transform: translateX(-50%); }
//             100% { transform: translateX(0); }
//           }

//           .animate-scroll-left {
//             animation: scroll-left 30s linear infinite;
//           }

//           .animate-scroll-right {
//             animation: scroll-right 30s linear infinite;
//           }

//           .animate-scroll-left:hover,
//           .animate-scroll-right:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>

//     </section>
//   );
// }