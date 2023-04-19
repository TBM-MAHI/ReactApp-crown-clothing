import { createContext, useState, useEffect,useReducer } from "react";
import {
  create_Firestore_UserDocument_From_Auth,
  on_Authentication_stateChangeListener,
  get_User_DocumentData_FromFirestore,
} from "../utility/firebase/firebase.utility";

// the actual value we want to access
export let userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  isProfileOpen: false,
  setisProfileOpen:()=>{}
});

const User_Action_Types = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const userReducer = (state, action) => {
 /*  console.log('diapatched');
  console.log(state)
  console.log(action) */
  const { type, payload } = action;
 
  switch (type) {
    case User_Action_Types.SET_CURRENT_USER:
      return { currentUser: payload }
    default:
      throw new Error(`Unhandeled rejection type ${type} in userRedcuer`);
    }
}

const INITIAL_STATE = {
  currentUser: null
}
const UserProvider = ({ children }) => {
  let [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  let { currentUser } = state;
 
  const setCurrentUser = (user) => {
    dispatch({ type: User_Action_Types.SET_CURRENT_USER, payload: user })
  }
  //const [currentUser, setCurrentUser] = useState(null);
  const [ isProfileOpen, setisProfileOpen ] = useState(false);
  useEffect(() => {
    async function setUserContext() {
    // console.log('fire effect from setUserContext')
      let Unsubscribe = await on_Authentication_stateChangeListener(
        async (user) => {
          // console.log(user);
          if (user) {
            let usersDocumentReference =
              await create_Firestore_UserDocument_From_Auth(user);
            let data = await get_User_DocumentData_FromFirestore(usersDocumentReference);
            setCurrentUser(data);
          }
        }
      );
      return Unsubscribe;
    };
    setUserContext();
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    isProfileOpen,
    setisProfileOpen
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
