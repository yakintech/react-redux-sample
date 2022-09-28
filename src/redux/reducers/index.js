import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { counterReducer } from "./counter.reducer";


export default combineReducers({
    cartReducer,
    counterReducer
})