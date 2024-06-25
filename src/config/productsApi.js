import { useDispatch } from "react-redux";
import { setProducts } from "../redux/ProductsSlice";

export default fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })