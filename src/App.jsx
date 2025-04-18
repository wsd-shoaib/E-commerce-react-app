import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Footer from "./Component/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
