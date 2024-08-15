"use client";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProduct } from "../store/slices/product";

const ProductList = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState(0);
  const products = useAppSelector((state) => state.productArray);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 bg-green-100 w-[85%] mx-auto p-4 rounded-md">
        <input
          type="text"
          placeholder="item name"
          className="p-3 bg-green-300 text-lg round"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          className="p-3 bg-green-300 text-lg round"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="qty"
          className="p-3 bg-green-300 text-lg round"
          value={qty}
          onChange={(e: any) => setQty(e.target.value)}
        />
        <button onClick={() => dispatch(addProduct({ name, category, qty }))}>
          Add item
        </button>
      </div>
      <h1>Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((item, i) => {
          return (
            <div className="w-350 border rounded-md bg-gray-400 p-4" key={i}>
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
