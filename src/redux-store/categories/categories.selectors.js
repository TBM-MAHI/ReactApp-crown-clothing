import { createSelector } from "reselect";

const select_from_CategoryReducer = (state) => {
  // console.log(" Initial selector fired from select_from_CategoryReducer");
  // console.log(state.category.categories_Array);
  return state.category.categories_Array;
};


export const selectCategoriesMap = createSelector(
  [select_from_CategoryReducer],
  (categories) => {
    // console.log("selector 3 fired from select_from_CategoryReducer");
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategory_Is_Loading = createSelector(
  [ select_from_CategoryReducer ],
  (categories) => categories.isLoading
);
// without reselect
/* export const selectCategoriesMap = (state) => {
  console.log("selector 3 fired");

  console.log(state.category.categories_Array);
  return state.category.categories_Array.reduce((acc, individualCategory) => {
    let { title, items } = individualCategory;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
 */
