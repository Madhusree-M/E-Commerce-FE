// import { Link } from "react-router";
// import ProductCard from "../components/ProductCard";

// const HomePage = () => {

//   const heroProducts = [
//     {
//       id: 1,
//       name: "Brown Bunny",
//       description: "Cuteness baked in chocolate brown",
//       image: "/toy1.jpg",
//       price: 299,
//     },
//     {
//       id: 2,
//       name: "White Blossom",
//       description: "Soft, calm and full of love",
//       image: "/toy4.jpg",
//       price: 349,
//     },
//     {
//       id: 3,
//       name: "Little Panda",
//       description: "A pocket-sized bundle of joy",
//       image: "/toy8.jpg",
//       price: 499,
//     },
//   ];

//   return (
//     <div className="w-full bg-[#FFF7EE] text-[#4A2E1F]">

//       {/* ================= INTRO ================= */}
//       <section className="py-28 px-6 text-center">
//         <h1 className="text-5xl font-extrabold">
//           Handmade with Love 🧶
//         </h1>
//         <p className="mt-6 text-lg max-w-2xl mx-auto text-[#6B4A3A]">
//           Every stitch tells a story.  
//           Discover handcrafted crochet toys & gifts made with care.
//         </p>

//         <div className="mt-10 flex gap-6 justify-center flex-wrap">
//           <Link to="/products">
//             <button className="px-10 py-4 bg-[#D97A5F] text-white font-bold rounded-full hover:scale-105 transition">
//               Shop Collection
//             </button>
//           </Link>

//           <Link to="/custom">
//             <button className="px-10 py-4 border-2 border-[#D97A5F] text-[#D97A5F] font-bold rounded-full hover:bg-[#D97A5F] hover:text-white transition">
//               Custom Orders
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* ================= TOP SELLING ================= */}
//       <section className="py-24 bg-white">
//         <h2 className="text-center text-4xl font-extrabold">
//           Top Selling Creations
//         </h2>

//         <span className="block mx-auto mt-6 w-24 h-1 bg-[#D97A5F] rounded-full" />

//         <div className="mt-14 px-6 flex flex-wrap gap-10 justify-center">
//           {heroProducts.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </section>

//       {/* ================= WHY ================= */}
//       <section className="py-28 px-6 text-center">
//         <h2 className="text-4xl font-bold">
//           Why Handmade Matters
//         </h2>

//         <p className="mt-6 max-w-3xl mx-auto text-lg text-[#6B4A3A]">
//           Factory-made gifts feel empty.  
//           Handmade gifts carry warmth, emotion, and meaning.
//         </p>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="px-6 pb-28">
//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             {
//               title: "100% Handcrafted",
//               desc: "Every item is crocheted by hand with patience and love.",
//             },
//             {
//               title: "Custom Made",
//               desc: "Colors, sizes, and designs made just the way you want.",
//             },
//             {
//               title: "Gift Ready",
//               desc: "Perfect for birthdays, babies, and special moments.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-8 rounded-3xl shadow-md hover:-translate-y-2 hover:shadow-xl transition"
//             >
//               <h3 className="text-2xl font-bold">{item.title}</h3>
//               <p className="mt-4 text-[#6B4A3A]">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="py-24 bg-[#F3E3D3]">
//         <div className="flex flex-wrap justify-center gap-16 text-center">
//           <div>
//             <h1 className="text-5xl font-extrabold">500+</h1>
//             <p className="mt-2">Happy Customers</p>
//           </div>
//           <div>
//             <h1 className="text-5xl font-extrabold">200+</h1>
//             <p className="mt-2">Handmade Creations</p>
//           </div>
//           <div>
//             <h1 className="text-5xl font-extrabold">100%</h1>
//             <p className="mt-2">Handmade Love</p>
//           </div>
//         </div>
//       </section>

//       {/* ================= CATEGORIES ================= */}
//       <section className="py-28 px-6">
//         <h2 className="text-center text-4xl font-bold">
//           Explore by Category
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
//           {[
//             "Crochet Toys",
//             "Keychains",
//             "Baby Gifts",
//             "Custom Dolls",
//             "Home Decor",
//             "Couple Gifts",
//             "Festival Specials",
//             "Mini Plushies",
//           ].map((cat, i) => (
//             <div
//               key={i}
//               className="bg-[#4A2E1F] text-white py-10 rounded-2xl text-center font-bold hover:scale-105 transition cursor-pointer"
//             >
//               {cat}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="py-32 bg-gradient-to-br from-[#4A2E1F] to-[#2F1B12] text-white text-center px-6">
//         <h2 className="text-5xl font-extrabold">
//           Not Just a Toy.
//           <br />A Memory Made by Hand.
//         </h2>

//         <p className="mt-6 text-xl text-[#EAD7C3] max-w-2xl mx-auto">
//           When you gift handmade, you gift emotion, effort, and love.
//         </p>

//         <Link to="/products">
//           <button className="mt-12 px-16 py-5 bg-[#D97A5F] text-white text-xl font-bold rounded-full hover:scale-110 transition">
//             Shop Handmade Creations
//           </button>
//         </Link>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-[#2F1B12] text-[#EAD7C3] py-6 text-center">
//         © {new Date().getFullYear()} Vasanthi Knots • Handmade with ❤️
//       </footer>

//     </div>
//   );
// };

// export default HomePage;


import { Link } from "react-router";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
    <div className="w-full bg-[#FFF7EE] text-[#4A2E1F] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold leading-tight"
        >
          Handmade with Love 🧶
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg max-w-2xl text-[#6B4A3A]"
        >
          Every stitch tells a story.  
          Discover handcrafted crochet toys & gifts made with care.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-6 flex-wrap justify-center"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#D97A5F] text-white font-bold rounded-full shadow-lg"
            >
              Shop Collection
            </motion.button>
          </Link>

          <Link to="/custom">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-10 py-4 border-2 border-[#D97A5F] text-[#D97A5F] font-bold rounded-full hover:bg-[#D97A5F] hover:text-white"
            >
              Custom Orders
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ================= TOP SELLING ================= */}
      <section className="py-28 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-4xl font-extrabold"
        >
          Top Selling Creations
        </motion.h2>

        <div className="mt-16 px-6 flex flex-wrap gap-12 justify-center">
          {heroProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY HANDMADE ================= */}
      <section className="py-28 px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold"
        >
          Why Handmade Matters
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-[#6B4A3A]"
        >
          Factory-made gifts feel empty.  
          Handmade gifts carry warmth, emotion, and meaning.
        </motion.p>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-28 px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-center text-4xl font-bold"
        >
          Explore by Category
        </motion.h2>

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
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, rotate: 1 }}
              className="bg-[#4A2E1F] text-white py-10 rounded-2xl text-center font-bold cursor-pointer shadow-xl"
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-gradient-to-br from-[#4A2E1F] to-[#2F1B12] text-white text-center px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-5xl font-extrabold"
        >
          Not Just a Toy.  
          <br />A Memory Made by Hand.
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-[#EAD7C3]"
        >
          When you gift handmade, you gift emotion, effort, and love.
        </motion.p>
      </section>

      <footer className="bg-[#2F1B12] text-[#EAD7C3] py-6 text-center">
        © {new Date().getFullYear()} Vasanthi Knots • Handmade with ❤️
      </footer>

    </div>
  );
};

export default HomePage;
