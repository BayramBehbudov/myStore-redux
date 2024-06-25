import ReactDOM from "react-dom/client";
import router, { RouterProvider } from "./router";
import { store } from "./redux/ProductsStore";
import { Provider } from "react-redux";
import "./style.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
