import {
  signInWithGOOGLEPopup,
  create_Firestore_UserDocument_From_Auth,
} from "../../utility/firebase/firebase.utility";

export default function Signin() {
    const logGoogleUser = async () => {
        let response = await signInWithGOOGLEPopup();
        let { user } = response;
        let usersDocumentReference = await create_Firestore_UserDocument_From_Auth(user);
         console.log(usersDocumentReference);
    } 
    return (
        <div>
            <h1>Signin</h1>
            <button onClick={logGoogleUser}> SIHN IN WITH GOOGLE </button>
        </div>
  )
}
