import { useDispatch } from "react-redux";
import { getData } from "./hook/productsSlice";

export default function App() {
   const productsDispatch = useDispatch();

   return (
      <div className="h-full bg-slate-500 p-[20px] flex gap-[15px]">
         <div className="[&>*]:w-[90%] w-[65%] [&>*]:mx-auto">
            <form className="bg-white h-[40px] rounded-sm font-[500] flex gap-[10px] items-center mb-[30px]">
               <button
                  className="pl-[10px] h-full"
                  type="submit"
                  onClick={(e) => {
                     e.preventDefault();
                     productsDispatch(getData());
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

            <div>
               <div className="w-[90%] mx-auto">
                  <img src="" alt="" className="w-[95%] aspect-[4/3] m-auto" />
                  <h4></h4>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
            </div>
         </div>
         <aside className="bg-white w-[35%] rounded-sm"></aside>
      </div>
   );
}
