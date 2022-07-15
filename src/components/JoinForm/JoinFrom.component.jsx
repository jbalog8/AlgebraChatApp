import { InputFormField } from "../InputFormField";
import { Button } from "../Button";

export function JoinForm(props) {
  return (
    <form className="join-form">
      <div className="join-form__field">
        <InputFormField
          label="Display name"
          name="displayName"
          id="displayName"
        />
      </div>
      <div className="join-form__field">
        <Button variant="text">Join</Button>
      </div>
    </form>
  );
}
