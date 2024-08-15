import CartList from "./components/CartList";
import ProductList from "./components/ProductList";

export default function Home() {

  return (
    <main className="p-6">
      <ProductList/>
      <h1 className="my-5">Cart List</h1>
      <CartList />
    </main>
  );
}
