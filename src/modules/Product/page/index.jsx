import React from "react";

// Sample product data
const products = [
  { id: 1, name: "Product 1", description: "Description 1", price: 20.99 },
  { id: 2, name: "Product 2", description: "Description 2", price: 30.49 },
  { id: 2, name: "Product 2", description: "Description 2", price: 30.49 },
  { id: 2, name: "Product 2", description: "Description 2", price: 30.49 },
  { id: 2, name: "Product 2", description: "Description 2", price: 30.49 },
  { id: 2, name: "Product 2", description: "Description 2", price: 30.49 },
  // Add more products as needed
];

const ProductsPage = () => {
  const handleBuyNow = (productId) => {
    // Add logic for Buy Now action
    console.log(`Product ${productId} - Buy Now clicked`);
  };

  const handleAddToCart = (productId) => {
    // Add logic for Add to Cart action
    console.log(`Product ${productId} - Add to Cart clicked`);
  };

  return (
    <div className="container mx-auto mt-8 bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-300 h-screen">
      <h2 className="text-3xl font-bold mb-4 text-white">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-green-600 font-semibold">
              Rs.{product.price.toFixed(2)}
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                onClick={() => handleBuyNow(product.id)}
              >
                Buy Now
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600v focus:outline-none focus:ring focus:border-green-300 transition duration-300"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
