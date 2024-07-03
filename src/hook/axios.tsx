import axios from "axios";
import { useDispatch } from "react-redux";
import { showValue } from "./productsSlice";

export async function getData() {
   try {
      // const productsReducer = useDispatch();
      // productsReducer(showValue());
   } catch (err) {
      console.log(err);
   }
}
