import { LOGIN, LOGOUT, SET_USER_INFO } from "../actions/users";

const initialState = {
    userInfo: null,
};
  
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        case SET_USER_INFO:
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
