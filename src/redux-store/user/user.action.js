import createDispatchAction from "../../utility/reducer/utility";
import { User_Action_Types } from "./user.types";


export const setCurrentUser = (user) => {
 return  createDispatchAction(User_Action_Types.SET_CURRENT_USER, user);
};
