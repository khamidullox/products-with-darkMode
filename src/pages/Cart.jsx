import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";
import { useFatch } from "../hooks/useFatch";

function Cart() {
  let { data } = useContext(GlobalContext);

  return (
    <>
      {!data && (
        <h3 className="text-center mb-5 mt-5 font-bold">Loading ...</h3>
      )}
      <ul className="flex flex-col justify-between ">
        {data &&
          data.map((product) => {
            return (
              <li
                className="flex p-10 rounded-xl border-gray-50 justify-stretch w-full px-96 "
                key={product.idF}
              >
                <div className="h-24 w-24 object-cover ">
                  <img
                    className=" rounded object-cover"
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium">
                      <h3>{product.title}</h3>
                      <p className="ml-4">{product.price}$</p>
                    </div>
                    <p className="mt-1 text-sm">
                      {(console.log(product), product.category)}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="">{product.rating}</p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Cart;
