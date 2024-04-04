import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {

  const links = [
    {
      name: "სამკაულები",
      href: "/product-page",
    },
  ];

  return (
    <header className="w-full border-b py-5 flex justify-between items-center sm:px-12 px-6 relative">
      <div>
        <h1 className="text-3xl text-primary font-semibold cursor-pointer">
          <Link to="/"><span className="font-bold text-primary/90">Me</span>სამკაულე</Link>
        </h1>
      </div>
      <nav className="hidden gap-6 mt-1 md:flex">
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
