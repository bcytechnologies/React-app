import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, alertVisability] = useState(false);
  const items = ["Houston", "Dallas", "Dixon", "Arlington", "Palestine"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectItem={handleSelectItem}
    ></ListGroup>
  );
}

export default App;
