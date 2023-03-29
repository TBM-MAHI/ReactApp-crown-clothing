import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import {
    auth,
    signInWithGOOGLEPopup,
    signInWithGOOGLeRedirect,
  create_Firestore_UserDocument_From_Auth,
} from "../../utility/firebase/firebase.utility";

const Signin = () => {
  useEffect(() => {
    return async function getdata() {
      let res = await getRedirectResult(auth);
      if (res) {
        let usersDocumentReference =
          await create_Firestore_UserDocument_From_Auth(res.user);
        console.log(usersDocumentReference);
      }
    };
  }, []);
    
  const logGoogleUser = async () => {
    let response = await signInWithGOOGLEPopup();
    let { user } = response;
    let usersDocumentReference = await create_Firestore_UserDocument_From_Auth(
      user
    );
    console.log(usersDocumentReference);
  };

  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}> SIgn IN WITH GOOGLE POPUP</button>
      <button onClick={signInWithGOOGLeRedirect}>SIgn IN WITH GOOGLE REDIRECT</button>
      <SignUpForm/>
    </div>
  );
};

export default Signin;
