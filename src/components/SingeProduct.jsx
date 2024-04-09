import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";

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

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const SingleProduct = () => {
  const [isTrue, setTrue] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    navigate("/");
    return null;
  }

  const messengerURL = `https://www.instagram.com/shop.briliant/`;

  const handleClick = () => {
    setTrue(!isTrue);
  };
  return (
    <div className="max-w-2xl mx-auto mb-12 mt-8">
      <Link
        to="/product-page"
        className="flex items-center font-bold text-xl ml-4 -mt-4"
      >
        <ArrowLeft size={30} />
      </Link>
      <div className="w-full mx-auto bg-white/60 rounded-md overflow-hidden shadow-md">
        <div className="mb-6 flex w-full gap-2 px-6 justify-between">
          <div className="p-4 w-full">
            <img
              onClick={handleClick}
              src={product.img}
              className={`w-full h-auto object-cover rounded-md ${
                isTrue ? "max-h-full" : "max-h-96"
              }`}
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-lg font-semibold my-2">
                აღწერილობა: {product.desc1}
              </p>
              <p className="text-gray-600 text-lg font-semibold my-2">
                პრობი: {product.desc2}
              </p>
              <p className="text-gray-900 text-lg font-bold mb-4">
                ₾{product.price}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={messengerURL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full font-semibold">ყიდვა</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
