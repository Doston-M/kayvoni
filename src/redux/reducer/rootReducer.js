import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { restReducer } from "./restReducer";
import { promoReducer } from "./promoReducer";
import { foodReducer } from "./foodReducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  rest: restReducer,
  promo: promoReducer,
  food: foodReducer,
});
