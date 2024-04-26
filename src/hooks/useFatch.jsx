
import { useEffect, useState } from "react";

function useFatch(api) {
  let [data, setData] = useState(null);
  let [error, setError] = useState(false);
  let [isPending, setIsPending] = useState(false);

  useEffect(() => {
    let getData = async () => {
      setIsPending(true);
      try {
        let req = await fetch(api);
        if (!req.ok) {
          throw new Error("Something no working in api");
        }
        let data = await req.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setIsPending(false);
      }
    };
    getData();
  }, [api]);

  return { data, error, isPending };
}

export { useFatch };
