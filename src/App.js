import { Message } from "./components/Message";

function App() {
  return (
    <Message
      avatarBackgroundColor="blue"
      avatarText="JB"
      displayName="Josip Balog"
      time="20:50"
    >
      Ready for the trip? I'm so excited I couldn't sleep!
    </Message>
  );
}

export default App;