import { useParams } from "react-router-dom";
import { useFatch } from "../hooks/useFatch";
import Contact from "../pages/Contact";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/frirebaseConfing";
function SingleProduct() {
  let { id } = useParams();
  let { data, error, isPending } = useFatch(
    "https://dummyjson.com/products/" + id
  );
  let addToDb = async () => {
    await addDoc(collection(db, "products"), data);
  };

  return (
    <>
      {isPending && (
        <h3 className="text-center mb-5 mt-5 font-bold">Loading ...</h3>
      )}
      {data && (
        <div className=" mx-auto px-16 mt-10 flex items-center flex-col ">
          <div className=" flex justify-between w-full px-8 items-baseline">
            <h1 className=" text-3xl mb-3">Product: {data.title}</h1>
            <button onClick={addToDb} className="btn btn-accent bg-accent mb-3">
              Add to cart
            </button>
          </div>
          <ul className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
            {data.images.map((img) => {
              return (
                <li key={Math.random()} className="carousel-item ">
                  <img
                    src={img}
                    className="rounded-box max-h-60 lg:max-h-96 h-full object-contain"
                  />
                </li>
              );
            })}
          </ul>
          <div className=" mt-5 font-bold flex  flex-col gap-5  items-center justify-center">
            <h3 className="">Brand: {data.brand}</h3>
            <p>Description: {data.description}</p>
            <p className="  text-green-500 text-2xl">Price: {data.price}$</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
