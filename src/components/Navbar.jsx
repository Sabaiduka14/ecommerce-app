import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import briliant from '../assets/briliant.png'

export default function Navbar() {

  const links = [
    {
      name: "დაათვალიერე",
      href: "/product-page",
    },
  ];

  return (
    <header className="w-full border-b py-5 flex justify-between items-center sm:px-12 px-6 relative">
      <div>
        <h1 className="md:text-3xl text-2xl text-primary font-semibold cursor-pointer">
          <Link to="/"><img className="w-24" src={briliant} alt="სამკაულები" /></Link>
        </h1>
      </div>
      <nav className="gap-6 mt-1 md:flex">
        {links.map((link, index) => (
          <div key={index}>
            <Link
              className="flex text-xl font-semibold hover:text-gray-600 text-gray-700"
              to={link.href}
            >
              <Button className="py-4">{link.name}</Button>
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
