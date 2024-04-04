import { LOGIN, LOGOUT, SET_USER_INFO, UPDATE_USER } from "../actions/users";

const initialState = {
    userInfo: null,
};
  
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        case SET_USER_INFO:
        case UPDATE_USER:
            return {
                ...state,
                userInfo: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                userInfo: null,
            };
        default:
            return state;
    }
};
  
export default userReducer;

