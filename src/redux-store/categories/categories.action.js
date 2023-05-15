import createDispatchAction from "../../utility/reducer/utility";
import {  Categories_Action_Types} from "./categories.types";

export const setCategoriesArray = (categoriesArray) => {
  return createDispatchAction(Categories_Action_Types.SET_CATEGORIES,categoriesArray);
};
