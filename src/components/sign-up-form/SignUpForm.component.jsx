import './SignUpForm.styles.scss'
import {
  create_AuthenticatedUserWithEmail_n_password,
  create_Firestore_UserDocument_From_Auth,
} from "../../utility/firebase/firebase.utility";

import FormInput from "../Form-Input/FormInput.component";
import Button from '../Button/Button.comp';
import { useState } from "react";
let initalFormFields = {
  displayName: "",
  email: "",
  password: "",
  ConfirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setformFields] = useState(initalFormFields);
  let { displayName, email, password, ConfirmPassword } = formFields;
  // console.log(formFields);

  let handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== ConfirmPassword) return alert("Password do not match!");
    try {
      let { user } = await create_AuthenticatedUserWithEmail_n_password(
        email,
        password
      );
      console.log(user);
      let usersDocumentReference =
        await create_Firestore_UserDocument_From_Auth(user, { displayName });
      console.log(usersDocumentReference);
      alert("SignIn Success!!");
      setformFields(initalFormFields);
    } catch (error) {
      console.log(`${error.name} \n ${error.message} \n  ${error.code}`);
      if (error.code === "auth/email-already-in-use") alert("email-already-in-use");
      else if (error.code === "auth/weak-password") alert("weak-password");
      else if (error.code === "auth/invalid-email") alert("Invalid-email");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setformFields({ ...formFields, [name]: value });
    // console.log(name);
  };
  return (
    <div className="sign-up-conatiner">
      {console.log("render signupForm")}
      <h1> Don't have an Account</h1>
      <p>Sign up With Your Email and Password </p>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          spellCheck={true}
          value={displayName}
          required
        />

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

        <FormInput
          label="ConfirmPassword"
          type="password"
          name="ConfirmPassword"
          onChange={handleChange}
          value={ConfirmPassword}
          required
        />
        <Button btntype={""} type={"submit"} >
          Sign Up
       </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
