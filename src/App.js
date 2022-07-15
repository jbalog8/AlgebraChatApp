import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { InputElement } from "./components/InputElement";

function App() {
  return (
    <div>
      <Button variant="text">Join</Button>
      <Button variant="icon"><Icon variant="send" /></Button>
      <InputElement />
    </div>
  );
}

export default App;