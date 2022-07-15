import "./MessageForm.styles.scss";

import { InputElement } from "../InputElement";
import { Button } from "../Button";
import { Icon } from "../Icon";

export function MessageForm(props) {
  return (
    <form className="message-form" autoComplete="off">
      <div className="message-form__input">
        <InputElement name="displayName" />
      </div>
      <div className="message-form__button">
        <Button variant="icon">
          <Icon variant="send" />
        </Button>
      </div>
    </form>
  );
}
