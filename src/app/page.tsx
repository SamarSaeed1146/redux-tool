
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
import { useGetPostsQuery } from "./store/slices/postApi";

export default function Home() {
  const { data } = useGetPostsQuery("");
  return (
    <main className="p-6">
      <h1 className="text-center">Redux Toolkit RTK Query</h1>
      {/* <ProductList/>
      <h1 className="my-5">Cart List</h1>
      <CartList /> */}
    </main>
  );
}
