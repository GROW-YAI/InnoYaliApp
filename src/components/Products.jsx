import { ShoppingCart } from "lucide-react";
import Images from "../constant/images";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "250mg Okro Powder",
      description: "Finely ground okro powder for smooth soups and stews",
      price: 10,
      image: Images.powderImage250,
      paystackLink: "https://paystack.com/buy/pop-okra-powder-zdnyve",
    },
    {
      id: 2,
      name: "500mg Okro Powder",
      description: "Perfect for restaurants and food service businesses",
      price: 20,
      image: Images.powderImage500,
      paystackLink: "https://paystack.com/buy/pop-okra-chunks-wsvyvm",
    },
    {
      id: 3,
      name: "1kg Okro Powder",
      description: "Perfect for restaurants and food service businesses",
      price: 30,
      image: Images.powderImage1kg,
      paystackLink: "https://paystack.com/buy/pop-okra-chunks-wsvyvm",
    },
    {
      id: 4,
      name: "250mg Dried Okro Chunks",
      description: "Premium dried okro chunks for traditional cooking",
      price: 15,
      image: Images.dryImage250,
      paystackLink: "https://paystack.com/buy/pop-okra-chunks-wsvyvm",
    },

    {
      id: 5,
      name: "500mg Dried Okro Chunks",
      description: "Perfect for restaurants and food service businesses",
      price: 25,
      image: Images.dryImage500,
      paystackLink: "https://paystack.com/buy/pop-okra-chunks-wsvyvm",
    },
    {
      id: 6,
      name: "1kg Dried Okro Chunks",
      description: "Perfect for restaurants and food service businesses",
      price: 40,
      image: Images.dryImage1kg,
      paystackLink: "https://paystack.com/buy/pop-okra-chunks-wsvyvm",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
                    aria-label={`Buy ${product.name} for GH₵${product.price}`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" aria-hidden="true" />
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
