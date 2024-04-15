import axios from "axios";
import { FOODS, FILTER_FOODS, ORDER_FOODS } from "./types";
import { API_URL } from "../../../utils/global";

const baseURL = API_URL;


   
export const allFoods = () => async (dispatch) => {
 try {
    const response = await axios.get(`${baseURL}api/dishes`);
    console.log('Alimentos obtenidos:', response.data.dishes) 
    dispatch({
      type: FOODS,
      payload: response.data.dishes,
    });
 } catch (error) {
    console.error('Error al obtener los alimentos:', error);
 }
};

export const filterFoods = (filter) => {
 return {
    type: FILTER_FOODS,
    payload: filter
 };
};

export const orderFoods = (order) => {
 return {
    type: ORDER_FOODS,
    payload: order
 };
};
