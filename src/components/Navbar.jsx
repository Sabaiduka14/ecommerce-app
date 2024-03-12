import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tech",
      href: "/product-page",
    },
    {
      name: "Clothes",
      href: "/product-page",
    },
  ];

  return (
    <header className="w-full border-b py-1 flex justify-between items-center sm:px-12 px-6 relative">
      <div>
        <h1 className="text-3xl text-primary font-semibold cursor-pointer">
          <Link to="/">Ecommerce</Link>
        </h1>
      </div>
      <nav className="hidden gap-6 mt-1 md:flex">
        {links.map((link, index) => (
          <div key={index}>
            <Link
              className="flex text-xl font-semibold hover:text-gray-600 text-gray-700"
              to={link.href}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
      <div
        className="bg-primary justify-center rounded hover:bg-primary/90 flex-col px-6 cursor-pointer lg:h-20 h-16 flex items-center text-stone-100"
      >
        <FaCartArrowDown className="text-3xl" />
      </div>
    </header>
  );
}
