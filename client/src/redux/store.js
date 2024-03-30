import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Importa thunk correctamente

import foodsReducer from './foods/reducers/foodReducer';
import roomsReducer from './rooms/reducers/roomReducer';
import userReducer from './users/reducers/usersReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  foods: foodsReducer,
  rooms: roomsReducer,
  users: userReducer,
});



const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


export default store;
