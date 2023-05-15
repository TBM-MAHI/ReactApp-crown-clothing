const CATEGORIES_INITIAL_STATE = {
  categories_Array: [],
};

export let categoriesReducers = (state = CATEGORIES_INITIAL_STATE, action) => {
  /*  console.log(`diapatched ${action.type}`);
    console.log(state); */
  let { type, payload } = action;
  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories_Array: payload,
      };
    default:
      return state;
  }
};
