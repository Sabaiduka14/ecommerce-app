import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <main className="px-12 md:mt-24 mt-12">
      <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <h1 className="text-3xl font-bold">მაღალი ხარისხის სამკაულები</h1>
        <p className="text-gray-500 text-xl mt-2 font-semibold">
          ყველაზე მაღალი ხარისხის სამკაულები ყველაზე დაბალ ფასად!
        </p>
        <Link to="/product-page">
          <m.button className="py-3 px-5 bg-primary  text-white rounded-md mt-8 w-full text-lg md:w-48 font-semibold">
            დაათვალიერე
          </m.button>
        </Link>
      </m.div>
      <m.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="mt-12 rounded-lg object-cover mb-24"
        src="https://media.istockphoto.com/id/1331089160/photo/different-elegant-bijouterie-and-plate-on-white-marble-table-flat-lay.jpg?s=612x612&w=0&k=20&c=3WOGBkSwU9hfJD-x43wMEBITuc0NrUD6E8x1l0BYQOA="
      />
    </main>
  );
}
