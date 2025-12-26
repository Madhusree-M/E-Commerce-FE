import Hero from "./components/Hero";
import HomePage from "./components/HomePage";
import QuickLinks from "./components/QuickLinks";

const App = () => {

  const heroProducts = [
    {
    id: 1,
    name: "Brown Bunny",
    description: "Cuteness baked in chocolate brown",
    image: "/toy1.jpg",
    price: 299
  },
  {
    id: 2,
    name: "White Blossom",
    description: "White and bright - just right",
    image: "/toy4.jpg",
    price: 349
  },
  {
    id: 3,
    name: "Little Panda",
    description: "A pocket size panda made to melt hearts",
    image: "/toy8.jpg",
    price: 499
  }
  ]
  return (
    <div className="">
      {/* <QuickLinks></QuickLinks> */}
      <HomePage/>
    </div>
);
}

export default App;

