import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from '../redux/product.slice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { addToCart } from '../redux/product.slice';
function CardSection() {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productslice);

  function handleAddToCart(e){
    console.log(e)
    dispatch(addToCart(e))
    toast.success("Product added to cart")
  }

  useEffect(() => {
    dispatch(productThunk());
  }, [dispatch])
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        {" "}
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
          Featured Collections
        </h2>
        <div className="flex items-center space-x-4">
          {" "}
          <select className="bg-gray-800 border-gray-700 text-white rounded-md text-sm focus:ring-custom focus:border-custom">
            {" "}
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
            <option>Popular</option>
          </select>
          <div className="flex items-center space-x-2">
            {" "}
            <button className="p-2 text-gray-400 hover:text-custom">
              <i className="fas fa-th-large" />
            </button>
            <button className="p-2 text-gray-400 hover:text-custom">
              <i className="fas fa-th-list" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {" "}

        {
          products && products.length > 0 ?

            products.map((product, index) => (
              <div key={index}>

                <div className="bg-gray-800 rounded-lg overflow-hidden group">
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover"
                      src={product.image}
                    />{" "}
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-gray-900/80 rounded-full text-gray-400 hover:text-custom">
                        {" "}
                        <i className="far fa-heart" />
                      </button>
                    </div>{" "}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      {" "}
                      <button onClick={()=>handleAddToCart(product)} className="!rounded-button w-full bg-custom text-white py-2 font-medium hover:bg-custom/90">
                        Add to Cart
                      </button>{" "}
                    </div>
                  </div>


                  <div className="p-4">
                    <h3 className="text-lg font-medium text-white">
                     {product.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {" "}
                        <i className="fas fa-star text-yellow-400" />
                        <i className="fas fa-star text-yellow-400" />
                        <i className="fas fa-star text-yellow-400" />
                        <i className="fas fa-star text-yellow-400" />
                        <i className="fas fa-star-half-alt text-yellow-400" />
                      </div>
                      <span className="ml-2 text-sm text-gray-400">(124)</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xl font-bold text-white">${product.price}</span>
                      <span className="text-sm text-gray-400 line-through">
                        $159.99
                      </span>
                    </div>{" "}
                  </div>

                </div>



              </div>

            ))

            :

            <h1>Loading...</h1>
        }


      </div>
      <div className="mt-12 text-center">
        <button className="!rounded-button inline-flex items-center px-8 py-3 border border-custom text-base font-medium text-custom bg-transparent hover:bg-custom/10">
          {" "}
          Load More
          <i className="fas fa-arrow-right ml-2" />
        </button>
      </div>{" "}
    </section>
  )
}

export default CardSection