const initialState = {
  list: [],
  isLoading: true,
  isError: false,
};

const list = (state = initialState, action) => {
  const { type, list } = action;
  switch (type) {
    case "GET_LIST_START":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        list,
      };
    case "GET_LIST_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SUBMIT_LIST_START":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SUBMIT_LIST_SUCCESS":
      console.log({ reducer: list });
      return {
        ...state,
        isLoading: false,
        isError: false,
        list,
      };
    case "SUBMIT_LIST_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const getList = (state) => state.list.list;
export const getIsLoading = (state) => state.list.isLoading;
export const getIsError = (state) => state.list.isError;

export default list;
