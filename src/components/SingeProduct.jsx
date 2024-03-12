import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    navigate("/");
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto mb-12 mt-8">
      <div className="w-full mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="mb-6 flex w-full gap-2 px-12 justify-between">
          <div className="p-4">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto max-h-96 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.price}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button className="w-full">Add to cart</Button>
              <Button className="w-full" variant="outline">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
