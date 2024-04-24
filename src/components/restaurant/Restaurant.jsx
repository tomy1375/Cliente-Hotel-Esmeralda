import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allFoods, filterFoods, orderFoods } from "../../redux/foods/actions/foodActions";
import "./Restaurant.css"

const MenuPage = ({ setCurrentPage }) => {
 const dispatch = useDispatch();
 const allFoodsData = useSelector((state) => state.foods.foodsAll);
 const filteredFoods = useSelector((state) => state.foods.filteredFoods);

 const [activeItem, setActiveItem] = useState("All Dishes");


 const handleCategoryClick = (category) => {
  dispatch(filterFoods({ category }));
  setActiveItem(category);
  setCurrentPage(1); 
};

 const handlePriceOrder = (orderType) => {
    dispatch(orderFoods({ type: "price", order: orderType }));
    setCurrentPage(1);
 };

 const handleAllDishesClick = () => {
  dispatch(allFoods());
  setActiveItem("All Dishes");
  setCurrentPage(1); 
};

 return (
    <main className="isolate md:isolation-auto  flex  flex-col px-5 text-3xl text-black max-w-[299px] justify-start">
      <div className="flex text-left flex-col self-start mt-8 text-stone-700">
      <h1 className="w-full text-left text-6xl text-black font-extrabold tracking-tighter leading-[70.4px] ">
        Menu
      </h1 >
        {["Italian", "Japanese", "Mexican", "Drinks", "Burgers", "Snacks", "Dessert", "All Dishes"].map((category) => (
          <button
            key={category}
            onClick={() => {
              if (category === "All Dishes") {
                handleAllDishesClick();
              } else {
                handleCategoryClick(category);
              }
            }}
            className={`btnd mt-16  ${activeItem === category ? " justify-center items-start px-1 py-1 text-3xl text-white whitespace-nowrap rounded-2xl border border-solid bg-v border-neutral-800 " : "text-stone-700"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="text-left flex justify-between mt-4 mb-2">
        <div><br />
          <label className="text-left text-6xl text-black font-extrabold tracking-tighter leading-[70.4px] m-1 mt-10">Order by</label>
          <div className="flex mt-4">
            <button
              className="border rounded-md px-3 py-2 mr-2 bg-v text-white hover:bg-neutral-800 transition-colors"
              onClick={() => handlePriceOrder("A")}
            >
              Lowest Price
            </button>
            <button
              className="border rounded-md px-3 py-2 mr-2 bg-v text-white hover:bg-neutral-800 transition-colors "
              onClick={() => handlePriceOrder("D")}
            >
              Highest Price
            </button>
          </div>
        </div>
      </div>
    </main>
 );
};

export default MenuPage;


