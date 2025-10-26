import { ShoppingCart } from "lucide-react";
import okroPowder from "../assets/images/okro-powder.png";
import driedChunks from "../assets/images/driedChunks.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "100g Okro Powder",
      description: "Finely ground okro powder for smooth soups and stews",
      price: 40,
      image: okroPowder,
      paystackLink: "https://paystack.com/buy/pop-okra-powder-zdnyve",
    },
    {
      id: 2,
      name: "100g Dried Okro Chunks",
      description: "Perfect for restaurants and food service businesses",
      price: 35,
      image: driedChunks,
      paystackLink: "https://paystack.com/buy/pop-okra-chunks-wsvyvm",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-full max-w-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {product.description}
                </p>

                <div className="flex flex-col space-y-3">
                  <span className="text-2xl font-bold text-green-600">
                    GH₵{product.price}
                  </span>
                  <a
                    href={product.paystackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
                    aria-label={`Buy ${product.name} for GH₵${product.price}`}
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
