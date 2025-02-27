import {
  Check,
  LeafyGreen,
  Droplets,
  Scale,
  PackageCheck,
  Store,
} from "lucide-react";
import Images from "../constant/images";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Selection & Preparation",
      description:
        "Carefully selecting mature, peak-fresh okra followed by thorough cleaning and precise slicing for optimal processing.",
      icon: <LeafyGreen className="w-6 h-6 text-green-500" />,
      details: [
        "Quality inspection of fresh okra",
        "Thorough washing process",
        "Precise slicing for even drying",
      ],
      image: Images.Image1,
    },
    {
      number: "02",
      title: "Advanced Drying",
      description:
        "Using innovative drying techniques that preserve nutritional value while ensuring even dehydration.",
      icon: <Droplets className="w-6 h-6 text-green-500" />,
      details: [
        "Temperature-controlled environment",
        "Consistent moisture reduction",
        "Nutritional value preservation",
      ],
      image: Images.Image7,
    },
    {
      number: "03",
      title: "Precision Processing",
      description:
        "Converting dried okra into fine powder using specialized grinding and sifting techniques.",
      icon: <Scale className="w-6 h-6 text-green-500" />,
      details: [
        "Fine grinding process",
        "Uniform particle size",
        "Quality sifting",
      ],
      image: Images.Image4,
    },
    {
      number: "04",
      title: "Eco-Friendly Packaging",
      description:
        "Using biodegradable paper bags with moisture-proof liners for sustainable and effective storage.",
      icon: <PackageCheck className="w-6 h-6 text-green-500" />,
      details: [
        "Biodegradable materials",
        "Moisture-proof protection",
        "Extended shelf life",
      ],
      image: Images.Image6,
    },
    {
      number: "05",
      title: "Distribution",
      description:
        "Strategic distribution through multiple channels to ensure year-round availability.",
      icon: <Store className="w-6 h-6 text-green-500" />,
      details: [
        "Online platforms",
        "Export channels",
        "Local market distribution",
      ],
      image: Images.Image2,
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl font-bold mt-2">Innovation in Every Step</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From farm to package, our innovative process ensures the highest
            quality while maintaining sustainability and nutritional value.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl" />
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="rounded-2xl shadow-lg relative z-10"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">{step.icon}</div>
                  <div>
                    <div className="text-green-600 font-semibold">
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600">{step.description}</p>

                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
