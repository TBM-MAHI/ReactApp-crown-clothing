import {create_AuthenticatedUserWithEmail_n_password} from '../../utility/firebase/firebase.utility'
import { useState } from "react";
let initalFormFields = {
  displayName: "",
  email: "",
  password: "",
  ConfirmPassword: "",
};
const SignUpForm = () => {
  const [ formFields, setformFields ] = useState(initalFormFields);
    let { displayName, email, password, ConfirmPassword } = formFields;
    // console.log(formFields);
    
    let handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(event);
        try {
             let response = await create_AuthenticatedUserWithEmail_n_password(
               email,
               password
             );
             console.log(response);
        } catch (error) {
            console.log(error);
        }
      
    }
    
    const handleChange = (e) => {
       let { name, value } = e.target;
          setformFields({ ...formFields, [name]: value });
        // console.log(name);
      };
    return (
      <div>
        <h1>Sign up WITH Email and Password</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="display-name">Display Name</label>
          <input
            type="text"
            name="displayName"
            onChange={handleChange}
            spellCheck={true}
            value={displayName}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="ConfirmPassword"
            onChange={handleChange}
            value={ConfirmPassword}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
};

export default SignUpForm;
