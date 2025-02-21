import { ShoppingCart } from "lucide-react";
import Images from "../constant/images";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Okra Powder",
      description: "Finely ground okra powder for smooth soups and stews",
      price: 30,
      image:Images.Image5,
      paystackLink: "https://paystack.com/pay/okra-powder",
    },
    {
      id: 2,
      name: "Dried Okra Chunks",
      description: "Premium dried okra chunks for traditional cooking",
      price: 20,
      image:Images.Image5,
      paystackLink: "https://paystack.com/pay/okra-chunks",
    },
    {
      id: 3,
      name: "Bulk Okra Package",
      description: "Perfect for restaurants and food service businesses",
      price: 50,
      image: Images.Image5,
      paystackLink: "https://paystack.com/pay/bulk-okra",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    GH₵{product.price}
                  </span>
                  <a
                    href={product.paystackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
