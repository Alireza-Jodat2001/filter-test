import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
   const [allData, setAllData] = useState([]);
   const [allCategories, setAllCategories] = useState([]);
   const [chooseProducts, setChooseProducts] = useState([]);

   // const [currCat, setCurrCat] = useState([]);
   const [maxPrice, setMaxPrice] = useState<number>();
   const [priceFiltered, setPriceFiltered] = useState<number>();

   async function getData(route) {
      try {
         const { data } = await axios.get(`https://fakestoreapi.com${route}`);
         return data;
      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      (async (route) => {
         const data = await getData(route);
         const categories = Array.from(
            new Set(data.map(({ category }) => category))
         );

         setAllCategories(categories);
         setAllData(data);
      })("/products");
   }, []);

   function showProducts(category) {
      // filter category
      const chooseCat = allData.filter(
         (product) => product.category === category
      );
      // let maxPrice: number;
      // currCat.forEach(({ price }, index) => {
      //    if (index === 0) maxPrice = price;
      //    if (price > maxPrice) maxPrice = price;
      // });
      // setMaxPrice(maxPrice);
      setChooseProducts(chooseCat);
   }

   function changeMaxPrice() {
      // const currPrice = allData.filter(
      //    (product) => product.price <= priceFiltered
      // );
      // setCurrCat(currPrice);
   }

   return (
      <div className="min-h-full bg-slate-500 p-[20px] flex gap-[15px]">
         <div className="[&>*]:w-[90%] w-[65%] [&>*]:mx-auto">
            <form className="bg-white h-[40px] rounded-sm font-[500] flex gap-[10px] items-center mb-[30px]">
               <button
                  className="pl-[10px] h-full"
                  type="submit"
                  onClick={(e) => {
                     e.preventDefault();
                  }}
               >
                  Search
               </button>
               <span className="h-[80%] w-[2px] bg-slate-500"></span>
               <input
                  type="text"
                  placeholder="Search Here..."
                  className="h-full pl-[5px] focus:outline-none"
               />
            </form>

            <div className="flex flex-wrap gap-[10px]">
               {allCategories.map((category, index) => {
                  return (
                     <button
                        key={index}
                        className="text-black bg-white px-[10px] rounded-sm font-[500]"
                        onClick={() => showProducts(category)}
                     >
                        {category}
                     </button>
                  );
               })}
            </div>

            <div className="mt-[50px] grid gap-[30px]">
               {chooseProducts?.map(
                  ({ title, image, description, price }, index) => (
                     <div
                        key={index}
                        className="w-[90%] mx-auto p-[30px] grid gap-[30px] bg-white rounded-lg"
                     >
                        <img
                           src={image}
                           alt={title}
                           className="h-[200px] aspect-auto m-auto "
                        />
                        <h4>{title}</h4>
                        <p className="">{description}</p>
                        <p>{price} $</p>
                     </div>
                  )
               )}
            </div>
         </div>
         <aside className="bg-white w-[35%] rounded-sm">
            {chooseProducts.length && (
               <>
                  <div className="flex w-full justify-evenly mb-[15px]">
                     <span>0 $</span>
                     <input
                        type="range"
                        min={0}
                        max={maxPrice}
                        onChange={(e) => {
                           setPriceFiltered(e.target.value);
                           changeMaxPrice();
                        }}
                     />
                     <span>{maxPrice} $</span>
                  </div>
                  <div>To: {priceFiltered}</div>
               </>
            )}
         </aside>
      </div>
   );
}
