import {
  PROMO_START,
  PROMO_SUCCESS,
  PROMO_FAIL,
} from "../actionTypes/promoTypes";

const initialState = {
  promo: {},
  error: null,
  loading: false,
};

export const promoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROMO_START:
      return { ...initialState, loading: true };
    case PROMO_SUCCESS:
      return {
        ...initialState,
        promo: payload,
        loading: false,
      };
    case PROMO_FAIL:
      return {
        ...initialState,
        error: payload,
        promo: null,
        loading: false,
      };
    default:
      return initialState;
  }
};
