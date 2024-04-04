import { Link } from "react-router-dom";

export default function ProductCard() {
  const products = [
    {
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
      id: 1,
    },
    {
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
      id: 2,
    },
    {
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
      id: 3,
    },
    {
      title: "ბეჭედი",
      price: 20,
      description: "ბეჭედი ლალის წითელი ქვით",
      img: "https://media.istockphoto.com/id/1415483167/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-display-showcase.jpg?s=612x612&w=0&k=20&c=BkT5LNV1MuXwY7ZYOQ1SH8kcklpd7Lcwr5mIdWZz5Uo=",
      id: 4,
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
            />
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
