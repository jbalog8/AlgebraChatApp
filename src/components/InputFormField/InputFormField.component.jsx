import "./InputFormField.styles.scss";

import { InputElement } from "../InputElement";

export function InputFormField(props) {
  return (
    <div className="input-form-field">
      <label className="input-form-field__label">Display name</label>
      <div className="input-form-field__element">
        <InputElement />
      </div>
    </div>
  );
}
