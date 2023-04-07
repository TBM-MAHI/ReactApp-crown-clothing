import { createContext, useState, useEffect } from "react"
import { on_Authentication_stateChangeListener } from "../utility/firebase/firebase.utility"
import { signOutUser,create_Firestore_UserDocument_From_Auth } from "../utility/firebase/firebase.utility"

// the actual value we want to access
export let userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null  
})

const UserProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null);
    const value = {
        currentUser,
        setCurrentUser
    }
    useEffect(() => {
       // console.log("render UserContext");
       return async function callauthState() {
           let Unsubscribe = await on_Authentication_stateChangeListener( async (user) => {
               console.log(user)
               if (user)
                 await create_Firestore_UserDocument_From_Auth(user);
               setCurrentUser(user)
           });
            return Unsubscribe;
        }
       // authState();
    }, []);

    return (<userContext.Provider value={value}>{children }</userContext.Provider>)
}

export default UserProvider;
