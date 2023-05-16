import createDispatchAction from "../../utility/reducer/utility";
import { Categories_Action_Types } from "./categories.types";
import { getApparels_CollectionAndDocuments } from "../../utility/firebase/firebase.utility";

export const setCategoriesArray = (categoriesArray) => {
  return createDispatchAction(
    Categories_Action_Types.FETCH_CATEGORIES_START,
    categoriesArray
  );
};

export const FETCH_Categories_start = () =>
 createDispatchAction(Categories_Action_Types.FETCH_CATEGORIES_START);

export const FETCH_Categories_success = (categoriesArray) =>
  createDispatchAction(
    Categories_Action_Types.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const FETCH_Categories_fail = (error) =>
  createDispatchAction(Categories_Action_Types.FETCH_CATEGORIES_START, error);

export let fetch_Categories_AsyncThunk = () => async (dispatch) => {
  dispatch(FETCH_Categories_start());
  try {
    let apparels_Collection_Array = await getApparels_CollectionAndDocuments();
    dispatch(FETCH_Categories_success(apparels_Collection_Array));
  } catch (error) {
    dispatch(FETCH_Categories_fail(error));
  }
};
