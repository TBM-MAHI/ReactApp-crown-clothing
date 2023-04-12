import "./SignInForm.styles.scss";
import React, { useState } from "react";
import FormInput from "../Form-Input/FormInput.component";
import Button from "../Button/Button.comp";

import {
  signIn_AuthUser_WithEmailAndPassword,
  signInWithGOOGLEPopup,
  create_Firestore_UserDocument_From_Auth,
} from "../../utility/firebase/firebase.utility";

const SignInForm = () => {
  let initalFormFields = {
    email: "",
    password: "",
  };
  let [formInputs, setformInputs] = useState(initalFormFields);
  let { email, password } = formInputs;
  // console.log(email+"\n"+password);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setformInputs({ ...formInputs, [name]: value });
  };

  const signIn_Using_Google = async () => {
    console.log("pop");
    let response = await signInWithGOOGLEPopup();
    let { user } = response;
    /*  let usersDocumentReference = await create_Firestore_UserDocument_From_Auth(
            user
        );
    console.log(usersDocumentReference); */
  };

  let handleSignIn = async (e) => {
    e.preventDefault();
    try {
      let { user } = await signIn_AuthUser_WithEmailAndPassword(
        email,
        password
      );
      setformInputs(initalFormFields);
     // console.log(user);
      alert('SignIn Success')
    } catch (error) {
      switch (error.code) {
        case "auth/user-disabled":
          alert("user-disabled");
          break;
        case "auth/user-not-found":
          alert("user-not-found!");
          break;
        case "auth/invalid-email":
          alert("Invalid-email");
          break;
        case "auth/wrong-password":
          alert("Wrong-password!");
          break;
        default:
          console.log(`${error.name} \n ${error.message} \n  ${error.code}`);
      }
    }
  };
  return (
    <div className="sign-In-conatiner">
      {console.log("render signInForm")}
      <h1> I Already Have an Account</h1>
      <p>Sign In With Your Email and Password </p>
      <form onSubmit={handleSignIn}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="button-conatiner">
          <Button type="submit"> Sign In</Button>
          <Button type="button" btntype="google" onClick={signIn_Using_Google}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
