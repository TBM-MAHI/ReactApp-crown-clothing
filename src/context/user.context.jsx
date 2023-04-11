import { createContext, useState, useEffect } from "react";
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

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [ isProfileOpen, setisProfileOpen ] = useState(false);
  useEffect(() => {
    return async function callauthState() {
      let Unsubscribe = await on_Authentication_stateChangeListener(
        async (user) => {
          //console.log(user);
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
    // authState();
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
