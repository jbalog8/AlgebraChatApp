import "./InputFormField.styles.scss";

import { InputElement } from "../InputElement";

export function InputFormField(props) {
  return (
    <div className="input-form-field">
      <label className="input-form-field__label" htmlFor="display-name">
        {props.label}
      </label>
      <div className="input-form-field__element">
        <InputElement id={props.id} name={props.className} />
      </div>
    </div>
  );
}
