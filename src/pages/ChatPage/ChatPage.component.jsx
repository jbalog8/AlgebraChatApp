import "./ChatPage.styles.scss";

import { Message as MessageModel } from "../../models/Message";
import { Message } from "../../components/Message";
import { MessageForm } from "../../components/MessageForm";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";

export function ChatPage() {
  const { user } = useUser();
  const [state, setState] = useState([]);
  const [drone, setDrone] = useState(null);

  const sendMessage = (formState) => {
    const message = new MessageModel({
      messageText: formState.message,
      user,
    });

    if (drone !== null) {
      drone.publish({
        room: "chat",
        message: message,
      });
    }

    setState((state) => [...state, message]);
  };

  useEffect(() => {
    if (drone !== null) return;

    setDrone(new window.Scaledrone("PvUu24tZ7XRUMERP"));
  }, [drone, setDrone]);

  useEffect(() => {
    if (drone === null) return;

    const room = drone.subscribe("chat");

    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Connected to room");
      // Connected to room
    });

    room.on("message", (message) => {
      // Received a message sent to the room
      console.log("message recived", message);
    });
  }, [drone]);

  const messageItems = state.map((message, index) => (
    <div key={index} className="chat-page__message-list-item">
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
      <div className="chat-page__title">Chat with friends</div>
      <div className="chat-page__message-list">{messageItems}</div>
      <div className="chat-page__form">
        <MessageForm onSend={sendMessage} />
      </div>
    </div>
  );
}
