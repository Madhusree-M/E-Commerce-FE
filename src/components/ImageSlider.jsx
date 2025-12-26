import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/bg4.jpg",
    title: "Handmade with Love 🧶",
    desc: "Every stitch tells a beautiful story",
    align: "left",
  },
  {
    image: "/bg5.jpg",
    title: "Thoughtful Gifts",
    desc: "Perfect for birthdays & special moments",
    align: "center",
  },
  {
    image: "/bg6.jpg",
    title: "Custom Creations",
    desc: "Made just the way you imagine",
    align: "right",
  },
  {
    image: "/bg7.jpg",
    title: "Crafted with Care",
    desc: "Warm, soft and full of love",
    align: "right",
  },
  {
    image: "/bg11.jpg",
    title: "From Our Hands to Your Heart",
    desc: "Gifting made meaningful",
    align: "left",
  },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const alignmentClasses = {
    left: "items-start text-left pl-12 md:pl-24",
    right: "items-end text-right pr-12 md:pr-24",
    center: "items-center text-center",
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-lg">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* IMAGE */}
          <img
            src={slides[index].image}
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* TEXT OVERLAY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`absolute inset-0 flex flex-col justify-center gap-4 px-6
              ${alignmentClasses[slides[index].align]}
            `}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white/50 max-w-xl">
              {slides[index].title}
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl">
              {slides[index].desc}
            </p>

            <button className="mt-6 px-10 py-4 bg-yellow-800/70 text-white font-bold rounded-full hover:scale-105 transition">
              Shop Now
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-900/80 text-white px-4 py-2 rounded-full hover:bg-yellow-900 transition z-10"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-900/80 text-white px-4 py-2 rounded-full hover:bg-yellow-900 transition z-10"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === i
                ? "bg-yellow-900"
                : "bg-yellow-900/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
