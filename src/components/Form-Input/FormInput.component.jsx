import React from "react";
import './FormInput.styles.scss'
const FormInput = ({ label, ...otherProps }) => {
  /*  let {label, ...otherProps}= {prop:value,.....} 
    desrtucture label and put rest of the property:val in otherProps
    ... rest syntax  */
  console.log(label, otherProps);
  return (
    <div className="group">
      <label
        className={`${
          otherProps.value.length ? `shrink ` : ``
        }form-input-label`}
      >
        {label}
      </label>

      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
