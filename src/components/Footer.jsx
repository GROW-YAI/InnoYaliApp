import {
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
} from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Images from "../constant/images";
import React from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("xqapknvd");

  // Update the modal state when form submission succeeds
  React.useEffect(() => {
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={Images.Logo}
                alt="Pop Food Ghana Ltd"
                className="w-8 h-8"
                title="Logo"
              />{" "}
              <span className="ml-2 text-xl font-bold">
                Pop Food Ghana Ltd.
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionizing okro preservation through innovative processing
              technology.
            </p>
            <p className="text-gray-400" aria-hidden="true">
              Follow us on social media
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
             <a
  href="https://www.instagram.com/pop_foods_ghana_limited?igsh=YzljYTk1ODg3Zg=="
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition"
>
  <Instagram className="h-5 w-5" />
</a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 hover:text-white transition"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#innovator"
                  className="text-gray-400 hover:text-white transition"
                >
                  The Innovator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href=" https://paystack.com/buy/pop-okra-powder-zdnyve"
                  className="text-gray-400 hover:text-white transition"
                >
                  Okra Powder
                </a>
              </li>
              <li>
                <a
                  href="https://paystack.com/buy/pop-okra-chunks-wsvyvm"
                  className="text-gray-400 hover:text-white transition"
                >
                  Dried Chunks
                </a>
              </li>
              <li>
                <a
                  href="https://paystack.com/buy/pop-okra-chunks-wsvyvm"
                  className="text-gray-400 hover:text-white transition"
                >
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new products and special offers.
            </p>
            <div className="space-y-4">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="hidden"
                  name="_subject"
                  value="Newsletter Subscription - Pop Food Ghana"
                />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Welcome to Pop Food Ghana's Newsletter! Thank you for subscribing. You'll receive our latest updates about products and special offers."
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-green-600 text-white px-4 mt-2 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                  {state.submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {state.errors && (
                <p className="text-red-400 text-sm">
                  There was an error submitting the form. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black p-8 rounded-lg max-w-md w-full mx-4">
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
                <h2 className="text-2xl font-bold mb-4 text-green-600">
                  Successfully Subscribed!
                </h2>
                <p className="text-gray-600 mb-4">
                  Thank you for subscribing to our newsletter! You&apos;ll
                  receive a confirmation email shortly.
                </p>
                <p className="text-gray-600 mb-6">
                  Stay tuned for updates about our latest products and special
                  offers!
                </p>
                <button
                  onClick={handleModalClose}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center text-md">
              © {new Date().getFullYear()} Pop Food Ghana Ltd. All rights
              reserved.
            </p>
            {/*  */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
