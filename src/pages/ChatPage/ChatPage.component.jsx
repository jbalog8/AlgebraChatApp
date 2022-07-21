import "./ChatPage.styles.scss";

import { Message } from "../../components/Message";
import { MessageForm } from "../../components/MessageForm";
import { Button } from "../../components/Button";

export function ChatPage(props) {
  if (props.error !== null) {
    return (
      <div className="chat-page__error">Failed to connect to chat room.</div>
    );
  }

  if (!props.joinedRoom) {
    return (
      <div className="chat-page__loading">Joining room, please wait...</div>
    );
  }

  const messageItems = props.messages.map((message) => (
    <div key={message.id} className="chat-page__message-list-item">
      <Message
        avatarBackgroundColor={message.user.avatarBackgroundColor}
        avatarText={message.user.avatarText}
        displayName={message.user.displayName}
        time={message.displayCreatedAt()}
      >
        {message.messageText}
      </Message>
    </div>
  ));

  return (
    <div className="chat-page">
      <div className="chat-page__singOut">
        <Button variant="text" onClick={props.clearUser}>
          Sign out
        </Button>
      </div>
      <div className="chat-page__title">Let's talk about cars...</div>
      <div className="chat-page__message-list">{messageItems}</div>
      <div className="chat-page__form">
        <MessageForm onSend={props.onSendMessage} />
      </div>
    </div>
  );
}
