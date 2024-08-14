"use client";

import { useAppSelector } from "../store/hooks";

const ProductList = () => {
  const products = useAppSelector((state) => state.productArray);

  return (
    <div>
      <h1>Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((item, i) => {
          return (
            <div className="w-350 border rounded-md bg-gray-400 p-4">
              <h1>{item.name}</h1>
              <p>{item.category}</p>
              <p>{item.qty}</p>
              <button>Add Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
