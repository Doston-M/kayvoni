import { MAIN_START, MAIN_SUCCESS, MAIN_FAIL } from "../actionTypes/mainTypes";

const initialState = {
  main: null,
  error: null,
  loading: false,
};

export const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MAIN_START:
      return { ...initialState, loading: true };
    case MAIN_SUCCESS:
      return {
        ...initialState,
        main: payload,
        loading: false,
      };
    case MAIN_FAIL:
      return {
        ...initialState,
        error: payload,
        main: null,
        loading: false,
      };
    default:
      return initialState;
  }
};
