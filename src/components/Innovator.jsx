import Images from "../constant/images";
import { Award, BookOpen, Users2, Lightbulb, ArrowRight } from "lucide-react";

const Innovator = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: "Patent Holder",
      description: "Unique okra preservation process",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
      title: "Published Research",
      description: "Food preservation technology expert",
    },
    {
      icon: <Users2 className="w-6 h-6 text-green-500" />,
      title: "Industry Leader",
      description: "2023 Food Innovation Award Winner",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-500" />,
      title: "Sustainability Advocate",
      description: "Pioneering eco-friendly methods",
    },
  ];

  return (
    <section
      id="innovator"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Leadership & Innovation
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Meet Our Innovator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pioneering sustainable food preservation technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with Decorative Elements */}
          <div className="relative" data-aos="fade-right">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-50 rounded-full opacity-50" />
              <img
                src={Images.InnnovatorImage || "/placeholder.svg"}
                alt="Prince Adjei Otsiwah"
                className="relative z-10 rounded-xl shadow-xl w-full object-cover aspect-auto"
              />
            </div>
            {/* Experience Badge */}
            <div
              className="absolute -right-6 top-1/4 bg-white shadow-lg rounded-lg p-4 z-20"
              data-aos="fade-left"
            >
              <p className="text-3xl font-bold text-green-600">1+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h3 className="text-3xl font-bold mb-4" id="innovator-name">
                Prince Adjei Otsiwah
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With over 1+ years of experience in food technology, Prince has
                revolutionized traditional okra preservation methods. His
                innovative approach combines modern technology with sustainable
                practices to create high-quality, long-lasting okra products.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center group px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              aria-label="Connect with us"
            >
              Connect with Us
              <ArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovator;
