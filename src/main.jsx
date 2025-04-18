import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./Pages/LoginOut/Login.jsx";
import ShopContextProvider from "./Context/ShopContextProvider/ShopContextProvider.jsx";
import AllCategoryProduct from "./Component/AllCategoryProduct/AllCategoryProduct.jsx";
import SingleData from "./Pages/Products/SingleData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/man",
        element: (
          <AllCategoryProduct category="Man" banner="/assets/Man-banner.jpg" />
        ),
      },
      {
        path: "/products/woman",
        element: (
          <AllCategoryProduct
            category="Woman"
            banner="/assets/woman-banner.jpg"
          />
        ),
      },
      {
        path: "/products/electronics",
        element: (
          <AllCategoryProduct
            category="Electronics"
            banner="/assets/electronics-banner.jpg"
          />
        ),
      },
      {
        path: "/products/:id",
        element: <SingleData />,
        loader: async ({ params }) => {
          const res = await fetch("/AllProducts.json");
          const data = await res.json();
          return data.find((item) => item.id === parseInt(params.id));
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
