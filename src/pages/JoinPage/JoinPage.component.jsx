import "./JoinPage.styles.scss";

import { JoinForm } from "../../components/JoinForm";

export function JoinPage(props) {
  return (
    <div className="join-page">
      <div className="join-page__title">Chat with friends</div>
      <div className="join-page__form">
        <JoinForm />
      </div>
    </div>
  );
}
