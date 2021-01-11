import {
  PROMO_START,
  PROMO_SUCCESS,
  PROMO_FAIL,
} from "../actionTypes/promoTypes";
import ApiService from "../../api/apiService";

export const getPromo = (id) => (dispatch) => {
  dispatch(promoStart());
  return ApiService.getResources(`/show/promo/restaurant/${id}`, null)
    .then((value) => {
      if (value.statusCode === 200) {
        dispatch(promoSuccess(value.data));
      }
    })
    .catch((error) => {
      dispatch(promoFail(error.message));
    });
};

export const promoStart = () => ({
  type: PROMO_START,
});

export const promoSuccess = (data) => ({
  type: PROMO_SUCCESS,
  payload: data,
});
export const promoFail = (error) => ({
  type: PROMO_FAIL,
  payload: error,
});
