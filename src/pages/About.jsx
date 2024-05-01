import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";

function About() {
  let { user } = useContext(GlobalContext);

  return (
    <main className=" w-full place-content-center flex items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1>{user.displayName}</h1>
          <span className=" text-sm lg:flex hidden"> Email : {user.email}</span>

          <div className="card-actions"></div>
        </div>
      </div>
    </main>
  );
}

export default About;
