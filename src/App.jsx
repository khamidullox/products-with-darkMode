import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobal";
//Layout
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./components/SingleProduct";
//login
import Login from "./pages/Login";
import Singup from "./pages/Singup";
//componetns
import ProtectotRoots from "./components/ProtectotRoots";
import { action as SingupAction } from "./pages/Singup";
import { action as LoginAction } from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";

//firebase
import auth, { db } from "./firebase/frirebaseConfing";
import { collection, getDocs } from "firebase/firestore";
import Cart from "./pages/Cart";

export default function App() {
  let { user, dispetch, authReady } = useContext(GlobalContext);
  localStorage.getItem(user) ? JSON.parse(localStorage.getItem(user)) : null;

  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectotRoots user={user}>
          <MainLayout />,
        </ProtectotRoots>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <Singup />,
      action: SingupAction,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispetch({ type: "LOG_IN", paylod: user });
      dispetch({ type: "AUTH_READY" });
    });
    let allData = [];
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      // console.log({
      //   ...querySnapshot.docs[0].data(),
      //   idf: querySnapshot.docs[0].id,
      // });
      // console.log();
      querySnapshot.docs.forEach((itme) => {
        allData.push({ idF: itme.id, ...itme.data() });
      });
      dispetch({ type: "DATA_BASE", paylod: allData });
    }

    getData();
  }, []);
  return <>{authReady && <RouterProvider router={router} />}</>;
}
