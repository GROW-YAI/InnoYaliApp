const Innovator = () => {
  return (
    <section id="innovator" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Innovator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pioneering sustainable food preservation technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Team Leader"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Sarah Johnson</h3>
            <p className="text-gray-600">
              With over 15 years of experience in food technology, Sarah has
              revolutionized traditional okra preservation methods. Her
              innovative approach combines modern technology with sustainable
              practices to create high-quality, long-lasting okra products.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold">Achievements:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Patent holder for unique okra preservation process</li>
                <li>Winner of the 2023 Food Innovation Award</li>
                <li>Published researcher in food preservation technology</li>
                <li>Advocate for sustainable food processing methods</li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Connect with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovator;
