"use client";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
import {
  useGetPostsByIdQuery,
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./store/slices/postApi";

export default function Home() {
  // const { data } = useGetPostsQuery(7);
  // const { data } = useGetPostsByIdQuery(2);
  const [updatepost, result] = useCreatePostMutation();
  // const [updatepost, result] = useUpdatePostMutation();
  // const [updatepost, result] = useDeletePostMutation();
  // console.log(data);
  return (
    <main className="p-6">
      <h1 className="text-center">Redux Toolkit RTK Query</h1>
      <br />
      <button className="py-4" onClick={() => updatepost(111)}>
        create user
      </button>
      <ProductList/>
      <h1 className="my-5">Cart List</h1>
      <CartList />
    </main>
  );
}
