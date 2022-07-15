import { Avatar } from "./components/Avatar";
import { MessageText } from "./components/MessageText";

function App() {
  return <div>
    <Avatar text="JB" backgroundColor="lime" />
    <MessageText displayName="Josip" time="20:13">
      Ready for the trip? I'm so excited I couldn't sleep!
    </MessageText>
  </div>
}

export default App;