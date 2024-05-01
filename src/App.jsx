import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useContext } from "react";
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
export default function App() {
  let { user } = useContext(GlobalContext);
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

  return <RouterProvider router={router} />;
}
