import ProductsList from "../components/ProductsList";
import { useFatch } from "../hooks/useFatch";

function Home() {
  let { data, error, isPending } = useFatch("https://dummyjson.com/products");
  console.log(data);
  return (
    <main className="maw-w-5xl mx-auto px-8 scroll">
      <h1 className="text-3xl maw-w-5xl mx-auto px-8 text-center mb-5 mt-5 font-bold">
        All Products
      </h1>
      {isPending && (
        <h3 className="text-center mb-5 mt-5 font-bold">Loading ...</h3>
      )}
      <ProductsList data={data} />
    </main>
  );
}

export default Home;
