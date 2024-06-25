import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ShopCard from "./pages/shopCard/ShopCard.jsx";
export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/shopcard",
    element: <ShopCard/>
  }
]);

export { RouterProvider };
