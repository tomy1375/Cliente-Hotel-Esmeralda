import { ROOMS, FILTER_ROOMS, ORDER_ROOMS } from "./types";
import axios from "axios";

 export const allRooms = () => async (dispatch) => {
    try {
      const response = await axios.get('/API/rooms/dbR.json');
      console.log('roomActions', response.data)
      return dispatch({
        type: ROOMS,
        payload: response.data,
      });
    } catch (error) {
    }
  };
  export const filterRooms = (filter) => (dispatch) => {
    return dispatch({
      type: FILTER_ROOMS,
      payload: filter
    });
  };
  export const orderRooms = (order) => (dispatch) => {
    return dispatch({
      type: ORDER_ROOMS,
      payload: order
    });
  };
  