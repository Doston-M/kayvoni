import {
  FOOD_START,
  FOOD_SUCCESS,
  FOOD_FAIL,
} from "../actionTypes/foodTypes";

const initialState = {
  food: {},
  error: null,
  loading: false,
};

export const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FOOD_START:
      return { ...initialState, loading: true };
    case FOOD_SUCCESS:
      return {
        ...initialState,
        food: payload,
        loading: false,
      };
    case FOOD_FAIL:
      return {
        ...initialState,
        error: payload,
        food: null,
        loading: false,
      };
    default:
      return initialState;
  }
};
