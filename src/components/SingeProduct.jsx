import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
    },
    {
      id: 2,
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
    },
    {
      id: 3,
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
    },
    {
      id: 4,
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    navigate("/");
    return null;
  }

  const messengerURL = `https://m.me/საბა.იდუკაშვილი`;

  return (
    <div className="max-w-2xl mx-auto mb-12 mt-8">
      <div className="w-full mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="mb-6 flex w-full gap-2 px-6 justify-between">
          <div className="p-4">
            <img
              src={product.img}
              className="w-full h-auto max-h-96 object-cover rounded-md"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-lg font-semibold mb-4">
                {product.description}
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
