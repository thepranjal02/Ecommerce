import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';


function Header() {
  const { addedproducts } = useSelector(state => state.productslice);
  return (
    <header className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
    {" "}
    <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          {" "}
          <NavLink to="/" className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
            />{" "}
          </NavLink>
          <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
            <a
              href="#"
              className="text-custom hover:text-custom/80 px-3 py-2 text-sm font-medium text-white"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-custom/80 px-3 py-2 text-sm font-medium"
            >
              Collections
            </a>{" "}
            <a
              href="#"
              className="text-gray-300 hover:text-custom/80 px-3 py-2 text-sm font-medium"
            >
              Trending
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-custom/80 px-3 py-2 text-sm font-medium"
            >
              Deals
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          {" "}
          <div className="max-w-lg w-full lg:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>{" "}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {" "}
                <i className="fas fa-search text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-custom sm:text-sm"
                placeholder="Search jewelry..."
                type="search"
              />{" "}
            </div>
          </div>
        </div>


        <div className="flex items-center lg:ml-6">
          {" "}
          <button className="p-2 text-gray-400 hover:text-custom">
            <i className="far fa-heart text-xl" />
          </button>

          <NavLink to={"/ecart"} className="ml-4 relative">
            <button className="p-2 text-gray-400 hover:text-custom relative">
              {" "}
              <i className="fas fa-shopping-bag text-xl" />
              <span className="absolute -top-1 -right-1 bg-custom text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {addedproducts.length}
              </span>
            </button>
          </NavLink>
          
          <button className="ml-4 p-2 text-gray-400 hover:text-custom">
            {" "}
            <i className="far fa-user text-xl" />
          </button>
        </div>
      </div>{" "}
    </nav>
  </header>
  )
}

export default Header