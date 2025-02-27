import {
  Sprout,
  Recycle,
  Users,
  TrendingUp,
  Scale,
  ShieldCheck,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sprout className="h-12 w-12 text-green-600 mb-4" />,
      title: "Sustainable Farming",
      description:
        "Supporting local farmers with sustainable practices and fair compensation for their produce.",
      stat: "69,345+",
      statLabel: "Tons of Okra Production",
    },
    {
      icon: <Recycle className="h-12 w-12 text-green-600 mb-4" />,
      title: "Eco-Friendly Packaging",
      description:
        "Using biodegradable materials that protect both the product and our environment.",
      stat: "100%",
      statLabel: "Biodegradable Packaging",
    },
    {
      icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
      title: "Community Impact",
      description:
        "Creating economic opportunities and supporting local farming communities.",
      stat: "1000+",
      statLabel: "Farmers Supported",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600 mb-4" />,
      title: "Extended Shelf Life",
      description:
        "Innovative preservation techniques that maintain nutritional value for longer periods.",
      stat: "12",
      statLabel: "Months Shelf Life",
    },
    {
      icon: <Scale className="h-12 w-12 text-green-600 mb-4" />,
      title: "Quality Control",
      description:
        "Rigorous testing and processing standards for consistent product quality.",
      stat: "99.9%",
      statLabel: "Quality Assurance",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-green-600 mb-4" />,
      title: "Food Security",
      description:
        "Contributing to year-round availability of nutritious okra products.",
      stat: "365",
      statLabel: "Days of Availability",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold mt-2">
            Transforming Okra Processing
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our innovative approach addresses key challenges in okra
            preservation while supporting sustainable agriculture and community
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>

              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-green-600">
                  {feature.stat}
                </div>
                <div className="text-sm text-gray-500">{feature.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Challenge Statement */}
        <div className="mt-20 bg-green-50 rounded-2xl p-8" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Addressing Real Challenges
            </h3>
            <p className="text-gray-600 mb-6">
              In 2022, Ghana's okra production reached 69,345.38 tons, yet
              significant portions were lost post-harvest due to perishability.
              Our innovation directly addresses this challenge, helping farmers
              reduce waste and increase their income while ensuring year-round
              availability of this nutritious vegetable.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Learn More About Our Impact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
