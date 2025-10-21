import React from "react";

const ShoppingCart = () => {
  const products = [
    { id: 1, name: "Product - 1" },
    { id: 2, name: "Product - 2" },
    { id: 3, name: "Product - 3" },
    { id: 4, name: "Product - 4" },
    { id: 5, name: "Product - 5" },
  ];
  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Products List</h2>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              {item.name} <button onClick={addToCart(item)}>Add To Cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
