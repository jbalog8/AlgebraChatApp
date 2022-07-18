import "./ChatPage.styles.scss";

import { Message } from "../../components/Message";

import { MessageForm } from "../../components/MessageForm";

export function ChatPage() {
  const sendMessage = (formState) => {
    console.log(formState);
  };

  return (
    <div className="chat-page">
      <div className="chat-page__title">Chat with friends</div>
      <div className="chat-page__message-list">
        <div className="chat-page__message-list-item">
          <Message
            avatarBackgroundColor="red"
            avatarText="JB"
            displayName="Josip Balog"
            time="20:50"
          >
            Ready for the trip? I'm so excited I couldn't sleep!
          </Message>
        </div>
        <div className="chat-page__message-list-item">
          <Message
            avatarBackgroundColor="red"
            avatarText="JB"
            displayName="Josip Balog"
            time="20:50"
          >
            Ready for the trip? I'm so excited I couldn't sleep!
          </Message>
        </div>
      </div>
      <div className="chat-page__form">
        <MessageForm onSend={sendMessage} />
      </div>
    </div>
  );
}
