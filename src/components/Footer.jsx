import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">
                Pop Food Ghana Limited
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionizing okro preservation through innovative processing
              technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
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
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center text-md">
              © {new Date().getFullYear()} Pop Food Ghana Limited. All rights
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
