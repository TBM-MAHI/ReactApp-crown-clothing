import {
  create_Firestore_UserDocument_From_Auth,
  on_Authentication_stateChangeListener,
 
} from "./utility/firebase/firebase.utility";
import { setCurrentUser } from "./redux-store/user/user.action";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/Shop.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Checkout from "./routes/Checkout/Checkout.component";
let App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    async function fetchUserData() {
      const unsubscribe = on_Authentication_stateChangeListener( (user) => {
        if (user) {
           create_Firestore_UserDocument_From_Auth(user);
      }
        dispatch(setCurrentUser(user));
      });
      return unsubscribe;
    }
    fetchUserData();
  }, []);

  return (
    <Routes>
      <Route path="/" element=<Navigation />>
        <Route index={true} element=<Home /> />
        <Route path="shop/*" element=<Shop /> />
        <Route path="auth" element=<Authentication /> />
        <Route path="checkout" element=<Checkout /> />
      </Route>
    </Routes>
  );
};

export default App;
