import { REST_START, REST_SUCCESS, REST_FAIL } from "../actionTypes/restTypes";

const initialState = {
  rest: {},
  error: null,
  loading: false,
};

export const restReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REST_START:
      return { ...initialState, loading: true };
    case REST_SUCCESS:
      return {
        ...initialState,
        rest: payload,
        loading: false,
      };
    case REST_FAIL:
      return {
        ...initialState,
        error: payload,
        rest: null,
        loading: false,
      };
    default:
      return initialState;
  }
};
