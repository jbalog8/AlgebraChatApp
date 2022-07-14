import { Button } from "./components/Button";
import { Icon } from "./components/Icon";

function App() {
  return (
    <div>
      <Button>Join</Button>
      <Button><Icon type="send" /></Button>
    </div>
  );
}

export default App;