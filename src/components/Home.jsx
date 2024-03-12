import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <main className="px-12 md:mt-24 mt-12">
      <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="max-w-2xl md:max-w-lg"
      >
        <h1 className="text-4xl font-bold">
          Most High Quality Products Here! With Top{" "}
          <m.span
            initial={{ color: "#333" }}
            animate={{ color: ["#C30010", "#FBCEB1", "#C30010"] }}
            transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
          >
            Prices
          </m.span>
        </h1>
        <p className="text-gray-500 text-xl mt-2 font-semibold">
          We sell most fashional and high quality products at the lowest
          priceses!
        </p>
        <m.button
        initial={{backgroundColor: "#f97316"}} 
        whileHover={{backgroundColor: ["#c30f14", "#00fc5c", "#020617", "#c30f14"]}}
        transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
        className="py-3 px-5 bg-primary text-white rounded-md mt-8 w-full text-lg md:w-48 font-semibold">
          <Link to="/product-page">Start Now</Link>
        </m.button>
      </m.div>
      <m.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="mt-12 rounded-lg object-cover mb-24"
        src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg"
      />
    </main>
  );
}
