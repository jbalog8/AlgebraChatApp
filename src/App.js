import { Button } from "./components/Button";
import { Icon } from "./components/Icon";

import { InputFormField } from "./components/InputFormField"

function App() {
  return (
    <div>
      <Button variant="text">Join</Button>
      <Button variant="icon"><Icon variant="send" /></Button>

      <InputFormField />
    </div>
  );
}

export default App;