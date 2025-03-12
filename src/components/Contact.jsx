import { Phone, Mail, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgjnypn");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
            <div className="text-center">
              <div className="text-green-600 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
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
              <h2 className="text-2xl font-bold text-green-600">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-600 mt-4">
                Thank you for reaching out to Pop Food Ghana Ltd. We&apos;ve
                received your message and will get back to you shortly.
              </p>
              <p className="text-gray-600 mt-2">
                Please check your email for our confirmation message.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products? We&apos;re here to help.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission - Pop Food Ghana"
                />
                <input type="hidden" name="_format" value="plain" />
                <input
                  type="hidden"
                  name="_next"
                  value={window.location.href}
                />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div
              className="bg-green-600 p-8 md:p-12 text-white"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p>+233 55-159-1730 </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>popfoodsghana@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p>
                      123 Processing Plant Street
                      <br />
                      Agona Kwanyako
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
