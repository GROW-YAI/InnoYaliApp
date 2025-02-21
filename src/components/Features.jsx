import { Package, Clock, Shield, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Package className="h-12 w-12 text-green-600 mb-4" />,
      title: "Premium Processing",
      description:
        "State-of-the-art technology for converting fresh okra into powder and chunks",
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600 mb-4" />,
      title: "Extended Shelf Life",
      description:
        "Preserve okra's goodness for up to 12 months without losing nutritional value",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600 mb-4" />,
      title: "Quality Guaranteed",
      description: "Rigorous quality control ensuring the finest okra products",
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600 mb-4" />,
      title: "100% Natural",
      description: "No artificial preservatives, just pure okra goodness",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold mt-2">
            Innovation in Every Package
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our advanced processing technology ensures the highest quality okra
            products while maintaining nutritional value and natural taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
