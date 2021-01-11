import {
  FOOD_START,
  FOOD_SUCCESS,
  FOOD_FAIL,
} from "../actionTypes/foodTypes";
import ApiService from "../../api/apiService";

export const getFood = (id) => (dispatch) => {
  dispatch(foodStart());
  return ApiService.getResources(`/show/food/${id}`, null)
    .then((value) => {
      if (value.statusCode === 200) {
        dispatch(foodSuccess(value.data));
      }
    })
    .catch((error) => {
      dispatch(foodFail(error.message));
    });
};

export const foodStart = () => ({
  type: FOOD_START,
});

export const foodSuccess = (data) => ({
  type: FOOD_SUCCESS,
  payload: data,
});
export const foodFail = (error) => ({
  type: FOOD_FAIL,
  payload: error,
});
