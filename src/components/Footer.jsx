import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="bg-gray-900 border-t border-gray-800">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img
            className="h-8"
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="Logo"
          />{" "}
          <p className="text-gray-400 text-sm">
            Discover our exclusive collection of artificial jewelry that
            combines elegance with affordability.
          </p>{" "}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-custom">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-gray-400 hover:text-custom">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-custom">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-gray-400 hover:text-custom">
              <i className="fab fa-pinterest" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom">
                Payment Options
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>{" "}
          <form className="flex">
            <input
              type="email"
              className="flex-1 bg-gray-800 border-gray-700 text-white rounded-l-md focus:ring-custom focus:border-custom"
              placeholder="Enter your email"
            />{" "}
            <button
              type="submit"
              className="!rounded-button px-4 bg-custom text-white rounded-r-md hover:bg-custom/90"
            >
              {" "}
              Subscribe
            </button>
          </form>
        </div>
      </div>{" "}
      <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 Luxury Artificial Jewelry. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-custom text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-custom text-sm">
            Terms of Service
          </a>
        </div>{" "}
      </div>
    </div>
  </footer>

  <div
    id="cart-sidebar"
    className="fixed inset-y-0 right-0 w-96 bg-gray-900 border-l border-gray-800 transform translate-x-full transition-transform duration-300 ease-in-out"
  >
    {" "}
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        {" "}
        <h2 className="text-lg font-medium text-white">Shopping Cart (3)</h2>
        <button className="text-gray-400 hover:text-custom">
          {" "}
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {" "}
        <div className="flex items-center space-x-4">
          <img
            className="h-20 w-20 object-cover rounded"
            src="https://creatie.ai/ai/api/search-image?query=A stunning close-up of a luxurious crystal necklace with intricate details, displayed on a dark elegant surface with professional studio lighting, capturing the sparkle and sophistication of the piece&width=200&height=200&orientation=squarish&flag=19824e47-c796-40b4-9b3e-8a955fa7f5e8"
            alt="Crystal Necklace"
          />{" "}
          <div className="flex-1">
            <h3 className="text-white font-medium">Crystal Dream Necklace</h3>
            <p className="text-gray-400 text-sm">Quantity: 1</p>
            <p className="text-custom font-medium">$129.99</p>
          </div>
          <button className="text-gray-400 hover:text-custom">
            {" "}
            <i className="fas fa-trash-alt" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {" "}
          <img
            className="h-20 w-20 object-cover rounded"
            src="https://creatie.ai/ai/api/search-image?query=A pair of elegant drop earrings with pearls and crystals, photographed on a dark velvet surface with dramatic lighting highlighting the intricate details and shimmer of the pieces&width=200&height=200&orientation=squarish&flag=2c7cb8d3-7dea-46d9-b641-bcb62e717cfc"
            alt="Pearl Earrings"
          />{" "}
          <div className="flex-1">
            <h3 className="text-white font-medium">Pearl Drop Earrings</h3>
            <p className="text-gray-400 text-sm">Quantity: 1</p>
            <p className="text-custom font-medium">$79.99</p>
          </div>
          <button className="text-gray-400 hover:text-custom">
            {" "}
            <i className="fas fa-trash-alt" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {" "}
          <img
            className="h-20 w-20 object-cover rounded"
            src="https://creatie.ai/ai/api/search-image?query=A luxury bracelet with interlinked crystal elements creating a sophisticated pattern, displayed on a black surface with professional lighting to highlight the sparkle and craftsmanship&width=200&height=200&orientation=squarish&flag=07c3bc1e-1978-41d3-8384-7fd3cddb9ee7"
            alt="Crystal Bracelet"
          />{" "}
          <div className="flex-1">
            <h3 className="text-white font-medium">Crystal Link Bracelet</h3>
            <p className="text-gray-400 text-sm">Quantity: 1</p>
            <p className="text-custom font-medium">$89.99</p>
          </div>
          <button className="text-gray-400 hover:text-custom">
            {" "}
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>{" "}
      <div className="p-4 border-t border-gray-800">
        <div className="flex justify-between mb-4">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-white font-medium">$299.97</span>
        </div>
        <button className="!rounded-button w-full bg-custom text-white py-3 font-medium hover:bg-custom/90">
          {" "}
          Checkout
        </button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Footer