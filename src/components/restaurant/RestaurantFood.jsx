import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allFoods,
  filterFoods,
  orderFoods,
} from "../../redux/foods/actions/foodActions";


function Food({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();
  const allFoodsData = useSelector((state) => state.foods.foodsAll);
  const filteredFoods = useSelector((state) => state.foods.filteredFoods);

  const PageSize = 3;
  
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    dispatch(allFoods());
    return () => {
      setShowModal(false);
    };
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    dispatch(filterFoods({ category: value }));
    setCurrentPage(1);
  };
  const handlePriceChange = (type) => {
    dispatch(orderFoods({ type: "price", order: type }));
  };

  const handleCategoryClick = (category) => {
    dispatch(filterFoods({ category }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, page));
  };

  const getCurrentPageNumber = () => {
    return currentPage;
  };

  const totalPages = filteredFoods
    ? Math.ceil(filteredFoods.length / PageSize)
    : 0;
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = filteredFoods
    ? Math.min(startIndex + PageSize, filteredFoods.length)
    : 0;
  const foodsForPage = filteredFoods
    ? filteredFoods.slice(startIndex, endIndex)
    : [];

  return (
    <>
      

      <div className="max-w-4xl mx-auto p-4">
       
        
        <div className="flex justify-between mt-4 mb-2">
        

          <div>
            <label className="block mb-1"></label>
            <div className="flex flex-wrap">
              {[
             
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="border rounded-md px-3 py-2 mr-2 mb-2 bg-blue-500 text-white hover:bg-blue-600"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {filteredFoods ? (
          foodsForPage.map((food) => (
            
            <section key={food.id} className="flex justify-center items-center max-md:pr-5 mb-4 shadow-lg">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
               <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                 <img
                   loading="lazy"
                   src={food.imageUrl}
                   alt={food.name}
                   className="grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full shadow-lg"
                 />
               </div>
               <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                 <div className="flex flex-col self-stretch pr-10 pb-2.5 my-auto font-extrabold text-neutral-600 max-md:mt-10 max-md:max-w-full">
                   <h2 className="text-left text-6xl tracking-tighter text-gray-800 leading-[70.4px] max-md:text-4xl">
                     {food.name}
                   </h2>
                   <p className="text-left mt-3.5 text-lg tracking-normal leading-7">
                     {food.description}
                   </p>
                   <div className="text-left self-start mt-9 text-4xl tracking-tight leading-10">
                     <p>
                       CATEGORY: {food.category}<span className="text-left text-neutral-600">.</span>
                       <br />
                       <span className=" text-neutral-600">PRICE: ${food.price}</span>
                     </p>
                   </div>
                 </div>
               </div>
            </div>
           </section>
           
          ))
        ) : (
          <div className="flex justify-center items-center max-md:pr-5 mb-4 shadow-lg">

            <p className="flex justify-center items-center max-md:pr-5 mb-4 shadow-lg">Loading dishes...</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-v text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button disabled={!filteredFoods || currentPage > totalPages}>
            {getCurrentPageNumber()}
          </button>
          <button
            className="px-4 py-2 bg-v text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!filteredFoods || endIndex >= filteredFoods.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Food;
