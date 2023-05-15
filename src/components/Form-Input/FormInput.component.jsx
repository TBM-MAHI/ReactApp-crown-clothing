import React from "react";
import "./FormInput.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  /*  let {label, ...otherProps}= {prop:value,.....} 
    desrtucture label and put rest of the {property:value} pair in otherProps
    ... rest syntax  */
  //console.log(label, otherProps);
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
     { <label
        className={`${
          otherProps.value.length ? `shrink ` : ``
        }form-input-label`}
      >
        {label}
      </label>}
    </div>
  );
};

export default FormInput;
