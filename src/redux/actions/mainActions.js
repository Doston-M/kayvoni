import { MAIN_START, MAIN_SUCCESS, MAIN_FAIL } from "../actionTypes/mainTypes";
import ApiService from "../../api/apiService";

export const getMain = () => (dispatch) => {
  dispatch(mainStart());
  return ApiService.getResources("/main", null)
    .then((value) => {
      if (value.statusCode === 200) {
        dispatch(mainSuccess(value.data));
      }
    })
    .catch((error) => {
      dispatch(mainFail(error.message));
    });
};

export const mainStart = () => ({
  type: MAIN_START,
});

export const mainSuccess = (payload) => ({
  type: MAIN_SUCCESS,
  payload,
});
export const mainFail = (payload) => ({
  type: MAIN_FAIL,
  payload,
});
