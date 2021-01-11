import { REST_START, REST_SUCCESS, REST_FAIL } from "../actionTypes/restTypes";
import ApiService from "../../api/apiService";

export const getRest = (id) => (dispatch) => {
  dispatch(restStart());
  return ApiService.getResources(`/show/restaurant/${id}`, null)
    .then((value) => {
      if (value.statusCode === 200) {
        dispatch(restSuccess(value.data));
      }
    })
    .catch((error) => {
      dispatch(restFail(error.message));
    });
};

export const restStart = () => ({
  type: REST_START,
});

export const restSuccess = (data) => ({
  type: REST_SUCCESS,
  payload: data,
});
export const restFail = (error) => ({
  type: REST_FAIL,
  payload: error,
});
