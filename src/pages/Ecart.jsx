import React from 'react'

function Ecart() {
  return (
    <div  className="dark:bg-gray-900 text-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
  {/* Header */}
  <header className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
    <button className="flex items-center text-gray-400 hover:text-white transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      Search
    </button>
  </header>
  {/* Cart Items */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      {/* Cart Items List */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Cart Header */}
        <div className="hidden md:grid grid-cols-12 bg-gray-700 px-4 py-3 text-sm font-medium">
          <div className="col-span-5">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-center">Total</div>
          <div className="col-span-1" />
        </div>
        {/* Cart Item 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-700">
          <div className="md:col-span-5 flex items-center">
            <div className="relative">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded"
              />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Premium Wireless Headphones</h3>
              <p className="text-gray-400 text-sm">Color: Black</p>
            </div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Price:</span>
            <div className="text-center">$199.99</div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Qty:</span>
            <div className="flex items-center justify-center">
              <button className="text-gray-400 hover:text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center bg-gray-700 border border-gray-600 rounded mx-2 py-1"
              />
              <button className="text-gray-400 hover:text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Total:</span>
            <div className="text-center font-medium">$199.99</div>
          </div>
          <div className="md:col-span-1 flex justify-end">
            <button className="text-gray-400 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Cart Item 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-700">
          <div className="md:col-span-5 flex items-center">
            <div className="relative">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded"
              />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Ultra HD Smart TV</h3>
              <p className="text-gray-400 text-sm">Size: 55"</p>
            </div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Price:</span>
            <div className="text-center">$899.99</div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Qty:</span>
            <div className="flex items-center justify-center">
              <button className="text-gray-400 hover:text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                type="number"
                defaultValue={2}
                className="w-12 text-center bg-gray-700 border border-gray-600 rounded mx-2 py-1"
              />
              <button className="text-gray-400 hover:text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Total:</span>
            <div className="text-center font-medium">$1,799.98</div>
          </div>
          <div className="md:col-span-1 flex justify-end">
            <button className="text-gray-400 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Cart Item 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
          <div className="md:col-span-5 flex items-center">
            <div className="relative">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded"
              />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Wireless Charging Pad</h3>
              <p className="text-gray-400 text-sm">Color: White</p>
            </div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Price:</span>
            <div className="text-center">$29.99</div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Qty:</span>
            <div className="flex items-center justify-center">
              <button className="text-gray-400 hover:text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center bg-gray-700 border border-gray-600 rounded mx-2 py-1"
              />
              <button className="text-gray-400 hover:text-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:col-span-2 flex md:block items-center">
            <span className="md:hidden text-gray-400 mr-2">Total:</span>
            <div className="text-center font-medium">$29.99</div>
          </div>
          <div className="md:col-span-1 flex justify-end">
            <button className="text-gray-400 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Coupon Code */}
      <div className="mt-6 bg-gray-800 rounded-lg shadow-lg p-4">
        <h3 className="font-medium mb-3">Have a coupon code?</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-grow bg-gray-700 border border-gray-600 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r font-medium transition">
            Apply
          </button>
        </div>
      </div>
      {/* Continue Shopping */}
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center text-blue-400 hover:text-blue-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Continue Shopping
        </a>
      </div>
    </div>
    {/* Order Summary */}
    <div className="lg:col-span-1">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 sticky top-6">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span>$2,029.96</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tax</span>
            <span>$142.10</span>
          </div>
          <div className="flex justify-between border-t border-gray-700 pt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold text-xl">$2,172.06</span>
          </div>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mt-8 transition flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Proceed to Checkout
        </button>
        <div className="mt-4 text-center text-sm text-gray-400">
          or{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">
            Pay with PayPal
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


{/* empty cart */}

<div>
    <img src="data:image/png;base64,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" alt="" />
</div>

    </div>


  )
}

export default Ecart