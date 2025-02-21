import Images from "../constant/images";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Selection",
      description:
        "Carefully selecting fresh, high-quality okra from trusted farmers",
      image: Images.Image1,
    },
    {
      number: "02",
      title: "Processing",
      description:
        "Converting fresh okra into powder and chunks using our proprietary technology",
      image:Images.Image4,
    },
    {
      number: "03",
      title: "Quality Control",
      description: "Rigorous testing to ensure consistent quality and safety",
      image:Images.Image3,
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl font-bold mt-2">Our Process</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From farm to package, we ensure the highest quality at every step
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 left-4 bg-green-600 text-white text-xl font-bold py-2 px-4 rounded-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
