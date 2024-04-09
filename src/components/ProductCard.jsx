import { Link } from "react-router-dom";

import black1 from "@/assets/black1.jpg";
import black2 from "@/assets/black2.jpg";
import black3 from "@/assets/black3.jpg";
import black4 from "@/assets/black4.jpg";
import blue1 from "@/assets/blue1.jpg";
import blue2 from "@/assets/blue2.jpg";
import green from "@/assets/green.jpg";
import green1 from "@/assets/green1.jpg";
import red from "@/assets/red1.jpg";
import silver1 from "@/assets/silver1.jpg";
import silver2 from "@/assets/silver2.jpg";
import silver3 from "@/assets/silver3.jpg";
import silver4 from "@/assets/silver4.jpg";
import silver5 from "@/assets/silver5.jpg";
import silver6 from "@/assets/silver6.jpg";
import silver7 from "@/assets/silver7.jpg";

export default function ProductCard() {
  const products = [
    {
      id: 1,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი შავი თვალით/ქვით",
      desc2: "925",
      img: black1,
    },
    {
      id: 2,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი შავი თვალით/ქვით",
      desc2: "925",
      img: black2,
    },
    {
      id: 3,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი შავი თვალით/ქვით",
      desc2: "925",
      img: black3,
    },
    {
      id: 4,
      title: "საყურეები",
      price: 20,
      desc1: "საყურეები შავი თვალით/ქვით",
      desc2: "925",
      img: black4,
    },
    {
      id: 5,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი ლურჯი თვალით/ქვით",
      desc2: "925",
      img: blue1,
    },
    {
      id: 6,
      title: "ბეჭედი",
      price: 30,
      desc1: "ბეჭედი ლურჯი თვალით/ქვით",
      desc2: "925",
      img: blue2,
    },
    {
      id: 7,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი მწვანე თვალით/ქვით",
      desc2: "925",
      img: green,
    },
    {
      id: 8,
      title: "ბეჭედი",
      price: 30,
      desc1: "ბეჭედი მწვანე თვალით/ქვით",
      desc2: "925",
      img: green1,
    },
    {
      id: 9,
      title: "ბეჭედი",
      price: 30,
      desc1: "ბეჭედი წითელი თვალით/ქვით",
      desc2: "925",
      img: red,
    },
    {
      id: 10,
      title: "ბეჭედი",
      price: 30,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver1,
    },
    {
      id: 11,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver2,
    },
    {
      id: 12,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver3,
    },
    {
      id: 13,
      title: "ბეჭედი",
      price: 30,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver4,
    },
    {
      id: 14,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver5,
    },
    {
      id: 15,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver6,
    },
    {
      id: 16,
      title: "ბეჭედი",
      price: 20,
      desc1: "ბეჭედი ვერცხლის",
      desc2: "925",
      img: silver7,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-7 flex-wrap justify-around gap-8">
      {products.map((product) => (
        <Link to={`/product-page/${product.id}`} key={product.id}>
          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={product.img} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-600 text-base font-semibold mb-4">
                {product.description}
              </p>
              <p className="text-gray-900 font-bold text-lg">
                ₾{product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
