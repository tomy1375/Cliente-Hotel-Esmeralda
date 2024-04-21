import { FOODS, FILTER_FOODS, ORDER_FOODS } from "../actions/types";

const initialState = {
  foodsAll: [],
  filteredFoods: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FOODS:
      return {
        ...state,
        foodsAll: payload,
        filteredFoods: [...payload],
      };
    
        case FILTER_FOODS:
          const { category } = payload;
          let filteredByCategory = [...state.foodsAll]; 
          if (category) {
            filteredByCategory = filteredByCategory.filter((food) => food.category === category);
          }
          return { ...state, filteredFoods: filteredByCategory };
    case ORDER_FOODS:
      const { type: orderType, order } = payload;
      let sortedFoods = [...state.filteredFoods];

      if (orderType === "price") {
        sortedFoods.sort((a, b) => a.price - b.price);
        if (order === "D") {
          sortedFoods.reverse();
        }
      }

      return { ...state, filteredFoods: sortedFoods };

    default:
      return state;
  }
};

export default rootReducer;
