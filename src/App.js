import { Button } from "./components/Button";
import { Icon } from "./components/Icon";

function App() {
  return (
    <div>
      <Button variant="text">Join</Button>
      <Button variant="icon"><Icon variant="send" /></Button>
    </div>
  );
}

export default App;