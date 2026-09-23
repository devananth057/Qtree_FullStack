import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [cart, setCart] = useState([]);

  const data = [
    {
      id: 1,
      title: "Men's Cotton T-Shirt",
      description: "Stylish cotton T-shirt",
      price: 366,
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 2,
      title: "Men's Brown T-Shirt",
      description: "Comfortable regular fit",
      price: 384,
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 3,
      title: "Printed Black T-Shirt",
      description: "Premium printed design",
      price: 272,
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 4,
      title: "Men's Maroon T-Shirt",
      description: "Soft cotton material",
      price: 303,
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 5,
      title: "Casual Polo T-Shirt",
      description: "Perfect for daily wear",
      price: 499,
      image: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <div className="container-fluid minDiv">
      <div className="row">

        {/* LEFT SECTION */}
        <div className="col-2 left border border-dark p-3">
          <h4>Selected Items</h4>

          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>₹{item.price}</p>
              <hr />
            </div>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="col-10 right border border-dark">
          <div className="row g-3">
            {data.map((product) => (
              <div className="col-lg-4 col-md-6" key={product.id}>
                <ProductCard
                  product={product}
                  cart={cart}
                  setCart={setCart}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;