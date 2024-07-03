import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
   value?: number;
   products: productsType[];
}

interface productsType {
   category: string;
   description: string;
   id: number;
   image: string;
   price: number;
   rating: { rate: number; count: number };
   title: string;
}

const initialState: initialStateType = {
   value: 0,
   products: [],
};

export const counterSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      async getData(state) {
         try {
            const res = await axios.get("https://fakestoreapi.com/products");

            // state.products = res;

            console.log(state.value);
         } catch (err) {}
      },
   },
});

export const { getData } = counterSlice.actions;

export default counterSlice.reducer;
