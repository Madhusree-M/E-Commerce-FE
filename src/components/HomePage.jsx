import { Link } from "react-router";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import ImageSlider from "../components/ImageSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const heroProducts = [
    {
      id: 1,
      name: "Brown Bunny",
      description: "Cuteness baked in chocolate brown",
      image: "/toy1.jpg",
      price: 299,
    },
    {
      id: 2,
      name: "White Blossom",
      description: "Soft, calm and full of love",
      image: "/toy4.jpg",
      price: 349,
    },
    {
      id: 3,
      name: "Little Panda",
      description: "A pocket-sized bundle of joy",
      image: "/toy8.jpg",
      price: 499,
    },
  ];

  return (
    <div className="w-full text-yellow-950 bg-yellow-800/20 overflow-hidden">

{/* ================= IMAGE SLIDER ================= */}
<section>
  <ImageSlider />
</section>

      {/* ================= HERO ================= */}
      <section className="h-100 flex flex-col justify-center items-center text-center px-6">

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-yellow-900/80"
        >
          Every stitch tells a story.  
          Discover handcrafted crochet toys & gifts made with care.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-2 flex gap-6 flex-wrap justify-center"
        >
          <Link to="/products">
            <button className="px-10 py-4 bg-yellow-900 text-white font-bold rounded-full hover:scale-105 transition">
              Shop Collection
            </button>
          </Link>

          <Link to="/login">
            <button className="px-10 py-4 border-2 border-yellow-900 text-yellow-900 font-bold rounded-full hover:bg-yellow-900 hover:text-white transition">
              Login
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ================= TOP SELLING ================= */}
      <section className="py-24 bg-white/70">
        <Reveal>
          <h2 className="text-center text-4xl font-extrabold text-yellow-950">
            Top Selling Creations
          </h2>
          <span className="block mx-auto mt-5 w-100 h-1 bg-yellow-800/90 rounded-full"></span>
        </Reveal>

        <div className="mt-16 px-6 flex flex-wrap gap-10 justify-center">
          {heroProducts.map(product => (
            <Reveal key={product.id}>
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WHY HANDMADE ================= */}
      <section className="py-28 px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold">
            Why Handmade Matters
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-yellow-900/80">
            Factory-made gifts feel empty.  
            Handmade gifts carry warmth, emotion, and meaning.
          </p>
        </Reveal>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "100% Handcrafted",
              desc: "Every item is crocheted by hand with patience and love.",
            },
            {
              title: "Custom Made",
              desc: "Colors, sizes, and designs made just the way you want.",
            },
            {
              title: "Gift Ready",
              desc: "Perfect for birthdays, babies, and special moments.",
            },
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl hover:-translate-y-1 transition">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-yellow-900/80">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-yellow-900/30 text-yellow-900">
        <div className="flex flex-wrap justify-center gap-16 text-center">
          {[
            { value: "100+", label: "Happy Customers" },
            { value: "80+", label: "Handmade Creations" },
            { value: "100%", label: "Handmade Love" },
          ].map((stat, i) => (
            <Reveal key={i}>
              <div>
                <h1 className="text-5xl font-extrabold">{stat.value}</h1>
                <p className="mt-2 text-yellow-800">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-28 px-6">
        <Reveal>
          <h2 className="text-center text-4xl font-bold">
            Explore by Category
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            "Crochet Toys",
            "Keychains",
            "Baby Gifts",
            "Custom Dolls",
            "Home Decor",
            "Couple Gifts",
            "Festival Specials",
            "Mini Plushies",
          ].map((cat, i) => (
            <Reveal key={i}>
              <div className="bg-yellow-900/70 text-white py-10 rounded-2xl text-center font-bold hover:scale-105 transition cursor-pointer">
                {cat}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
