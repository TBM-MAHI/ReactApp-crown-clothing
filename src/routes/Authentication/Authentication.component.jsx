import './Authentication.style.scss'
import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInForm from "../../components/Sign-in-Form/SignInForm";

import {
  auth,
  signInWithGOOGLeRedirect,
  create_Firestore_UserDocument_From_Auth,
} from "../../utility/firebase/firebase.utility";

const Authentication = () => {
  /* useEffect(() => {
    return async function getdata() {
      let res = await getRedirectResult(auth);
      if (res) {
        let usersDocumentReference =
          await create_Firestore_UserDocument_From_Auth(res.user);
        console.log(usersDocumentReference);
      }
    };
  }, []); */
    
  return (
    <div className="authenticate-conatiner">
     {/* <button onClick={signInWithGOOGLeRedirect}>SIgn IN WITH GOOGLE REDIRECT</button> */}
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
