import { Outlet } from "react-router-dom";
import Novabar from "../components/Novabar";
function MainLayout() {

  return <nav>
    <Novabar/>
    <Outlet/>
  </nav>;
}

export default MainLayout;
