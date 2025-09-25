import { Phone, Mail, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgjnypn");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsModalOpen(true);
    }
  }, [state.succeeded]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-20 bg-green-50">
      <div className="max-w-7xl  mx-auto px-2 sm:px-4 lg:px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Form Section */}
            <div className="p-4 sm:p-8 md:p-12" data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8">
                Have questions about our products? We&apos;re here to help.
              </p>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Contact Form - Pop Food Ghana"
                />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting Pop Food Ghana! We have received your message and will get back to you soon."
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                    placeholder="Your email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-base font-medium"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div
              className="bg-green-600 p-4 sm:p-8 md:p-12 text-white"
              data-aos="fade-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
            <a href="tel:+233551591730" className="flex items-start space-x-4">
    <Phone className="h-6 w-6 mt-1 flex-shrink-0 text-blue-500 hover:text-blue-700" />
    <div>
      <h4 className="font-semibold mb-1">Phone</h4>
      <p className="break-words text-gray-700">+233 55-159-1730</p>
    </div>
  </a>


 <div className="flex items-start space-x-4">
  {/* Clickable icon */}
  <a href="mailto:popfoodsghana@gmail.com">
    <Mail className="h-6 w-6 mt-1 flex-shrink-0 text-blue-500 hover:text-blue-700" />
  </a>

  {/* Clickable email text */}
  <div>
    <h4 className="font-semibold mb-1">Email</h4>
    <a
      href="mailto:popfoodsghana@gmail.com"
      className="break-words text-gray-700 hover:underline"
    >
      popfoodsghana@gmail.com
    </a>
  </div>
</div>


               <div className="flex items-start space-x-4">
  <a
    href="https://www.google.com/maps/search/?api=1&query=123+Processing+Plant+Street,+Agona+Kwanyako"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-blue-500 hover:text-blue-700" />
  </a>
  <div>
    <h4 className="font-semibold mb-1">Location</h4>
    <p className="break-words text-gray-700">
      123 Processing Plant Street
      <br />
      Agona Kwanyako
    </p>
  </div>
</div>

              </div>

              <div className="mt-8 sm:mt-12">
                <h4 className="font-semibold mb-3 sm:mb-4">Business Hours</h4>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white text-black p-6 sm:p-8 rounded-lg max-w-md w-full mx-auto">
            <div className="text-center">
              <div className="text-green-600 mb-4">
                <svg
                  className="w-12 sm:w-16 h-12 sm:h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-600">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-600 mb-3 sm:mb-4">
                Thank you for reaching out to Pop Food Ghana Ltd. We&apos;ve
                received your message and will get back to you shortly.
              </p>
              <p className="text-gray-600 mb-5 sm:mb-6">
                Please check your email for our confirmation message.
              </p>
              <button
                onClick={handleModalClose}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-base font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
