import { Link } from "react-router-dom";

export default function ProductCard() {
  const products = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_1280.jpg",
      title: "iPhone 14",
      price: "$795",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg",
      title: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2017/12/06/20/23/accessory-3002608_1280.jpg",
      title: "Sunglasses",
      price: "$50",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2018/10/02/11/44/huawei-3718609_640.jpg",
      title: "Smartwatch",
      price: "$250",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2017/03/14/11/39/perfume-2142817_1280.jpg",
      title: "Perfume",
      price: "$30",
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2016/12/27/14/35/money-1934036_640.jpg",
      title: "Wallet",
      price: "$20",
    },
    {
      id: 7,
      img: "https://cdn.pixabay.com/photo/2013/06/08/00/21/telescope-122960_640.jpg",
      title: "Telescope",
      price: "$150",
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_640.jpg",
      title: "T-shirt",
      price: "$15",
    },
    {
      id: 9,
      img: "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_640.jpg",
      title: "Headphones",
      price: "$80",
    },
    {
      id: 10,
      img: "https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573_640.jpg",
      title: "Necklace",
      price: "$50",
    },
    {
      id: 11,
      img: "https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_640.jpg",
      title: "Mouse",
      price: "$20",
    },
    {
      id: 12,
      img: "https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573_640.jpg",
      title: "Watch",
      price: "$39",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-7 flex-wrap justify-around gap-8">
      {products.map((product) => (
        <Link to={`/product-page/${product.id}`} key={product.id}>
          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover object-center"
              src={product.img}
              alt={product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
