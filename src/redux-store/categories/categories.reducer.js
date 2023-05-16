const CATEGORIES_INITIAL_STATE = {
  categories_Array: [],
  isLoading: false,
  error:null,
};

export let categoriesReducers = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  /*  console.log(`diapatched ${action.type}`);
    console.log(state); */
  let { type, payload } = action;
  switch (type) {
    case "FETCH_CATEGORIES_START":
      return {
        ...state,
        isLoading: payload,
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories_Array: payload,
        isLoading: false,
      };
    case "FETCH_CATEGORIES_FAILED":
      return {
        ...state,
        isLoading: false,
        error:payload 
      };
    default:
      return state;
  }
};
