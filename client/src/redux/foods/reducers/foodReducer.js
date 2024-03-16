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
      const { category, price } = payload;

      if (!category && !price) {
        return { ...state, filteredFoods: state.foodsAll };
      }

      if (category) {
        const filterByCategory = state.foodsAll.filter((food) => food.category === category);
        return { ...state, filteredFoods: filterByCategory };
      }

      if (price) {
        const filterByPrice = state.foodsAll.filter((food) => food.price <= price);
        return { ...state, filteredFoods: filterByPrice };
      }
    case ORDER_FOODS:
      const { orderType, order } = payload;
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
