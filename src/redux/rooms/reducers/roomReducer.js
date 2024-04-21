import { ROOMS, FILTER_ROOMS, ORDER_ROOMS } from "../actions/types";

const initialState = {
allRooms: [],
filteredRooms: []
}

const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
    case ROOMS:
    return {
    ...state,
    allRooms: payload,
    filteredRooms: [...payload] 
  };
    case FILTER_ROOMS:
    const {capacity, price} = payload
    
    if(!capacity && !price)  
    return {...state, filteredRooms: state.allRooms};
  
    if(capacity){ 
    const filterByCapacity = state.allRooms.filter(room => 
      room.capacity === capacity
    );
  
    return {...state, filteredRooms: filterByCapacity};  
    }
 
    if(price){
    const filterByPrice = state.allRooms.filter(room => 
      room.price <= price
    );
    return {...state, filteredRooms: filterByPrice};
    }
    case ORDER_ROOMS:
      const { sortType, order } = payload;
      let sortedRooms = [...state.filteredRooms];
    
      if (sortType === 'capacity') {
        sortedRooms.sort((a, b) => a.capacity - b.capacity);
      } else if (sortType === 'price') {
        sortedRooms.sort((a, b) => a.price - b.price);
      }
      
      if (order === 'D') {
        sortedRooms.reverse();
      }
    
      return { ...state, filteredRooms: sortedRooms };

    default: 
    return state;
    }
  }

export default rootReducer;

